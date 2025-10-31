import { useEffect, useRef } from 'react';
import { Renderer, Program, Triangle, Mesh } from 'ogl';
import styles from './Aurora.module.scss';

const VERT = `
attribute vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

// Fragment shader tuned for ribbon-like aurora bands
const FRAG = `
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform float uBlend;       // 0.0 ~ 1.0 background blend factor
uniform float uAmplitude;   // aurora intensity multiplier
uniform float uSpeed;       // animation speed
uniform int uNumColors;     // number of active color stops
uniform vec3 uColors[4];    // up to 4 color stops

// Hash and noise utilities
float hash(vec2 p) {
    p = fract(p * vec2(123.34, 345.45));
    p += dot(p, p + 34.345);
    return fract(p.x * p.y);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p *= 2.0;
        a *= 0.5;
    }
    return v;
}

vec3 palette(float t) {
    // Clamp t
    t = clamp(t, 0.0, 1.0);

    // Support 2~4 color stops
    if (uNumColors == 2) {
        return mix(uColors[0], uColors[1], t);
    } else if (uNumColors == 3) {
        float m = smoothstep(0.0, 0.5, t);
        float n = smoothstep(0.5, 1.0, t);
        vec3 c01 = mix(uColors[0], uColors[1], m);
        return mix(c01, uColors[2], n);
    } else {
        // 4 or more (we cap at 4)
        float a = smoothstep(0.0, 0.33, t);
        float b = smoothstep(0.33, 0.66, t);
        float c = smoothstep(0.66, 1.0, t);
        vec3 c01 = mix(uColors[0], uColors[1], a);
        vec3 c12 = mix(uColors[1], uColors[2], b);
        vec3 c23 = mix(uColors[2], uColors[3], c);
        // Cross-fade segments
        vec3 m1 = mix(c01, c12, smoothstep(0.15, 0.5, t));
        vec3 m2 = mix(c12, c23, smoothstep(0.5, 0.85, t));
        return mix(m1, m2, smoothstep(0.45, 0.55, t));
    }
}

void main() {
    // Normalized coords
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec2 p = (uv - 0.5);
    p.x *= uResolution.x / uResolution.y;

    float t = uTime * uSpeed;

    // Time-varying wind to increase undulation
    vec2 wind = vec2(sin(t * 0.17) * 0.22, cos(t * 0.13) * 0.16);

    // Base displacement field (soft, but animated by wind)
    float dispBase =
        fbm(p * 1.05 + wind + vec2(0.0, t * 0.10)) * 0.65 +
        fbm(p * 1.7 + wind * 0.7 + vec2(t * 0.06, -t * 0.04)) * 0.25 +
        fbm(p * 3.0 - wind * 0.4 - vec2(t * 0.02, t * 0.05)) * 0.08;

    // Layered sheets with different phase/offsets for stronger waviness
    float sheet1 = p.y + 0.28 * dispBase + 0.10 * sin(p.x * 1.9 + t * 0.35 + dispBase * 1.2);
    float sheet2 = (p.y + 0.07) + 0.22 * dispBase + 0.12 * sin((p.x + 0.25) * 1.6 + t * 0.28 - dispBase * 0.9);
    float sheet3 = (p.y - 0.09) + 0.18 * dispBase + 0.09 * sin((p.x - 0.18) * 2.3 + t * 0.42 + dispBase * 0.7);

    float band1 = smoothstep(0.6, 0.06, abs(sheet1));
    float band2 = smoothstep(0.75, 0.08, abs(sheet2));
    float band3 = smoothstep(0.85, 0.10, abs(sheet3));

    // Combine bands; slight powering for contrast while keeping softness
    float bands = pow(band1 * 0.9 + band2 * 0.7 + band3 * 0.55, 1.25);

    // Vertical falloff and subtle horizon glow
    float sky = smoothstep(0.0, 0.95, uv.y);
    float horizonGlow = smoothstep(0.0, 0.3, uv.y) * 0.35;

    // Color selection driven mainly by displacement with slow drift
    float huePick = clamp(0.5 + 0.5 * (dispBase * 1.0 + 0.1 * sin(t * 0.1)), 0.0, 1.0);
    vec3 col = palette(huePick);

    // Add subtle shimmer from higher-frequency fbm to enhance motion perception
    float shimmer = fbm(p * 6.0 + wind * 2.0 + vec2(t * 0.6, -t * 0.5)) * 0.06;
    float intensity = (bands + shimmer) * sky * (0.7 + horizonGlow) * uAmplitude;

    // Softer look: gentle bloom and lower overall contrast
    vec3 base = col * intensity;
    vec3 bloom = col * pow(intensity, 1.6) * 0.25;
    vec3 finalColor = mix(vec3(0.0), base + bloom, clamp(uBlend, 0.0, 1.0));

    // Softer alpha for sheet-like blending
    float alpha = clamp(intensity * 0.9, 0.0, 1.0);
    gl_FragColor = vec4(finalColor, alpha);
}
`;

function clamp01(n) {
    return Math.max(0, Math.min(1, n));
}

export default function Aurora({
    colorStops = ['#3647FF', '#3647FF', '#3647FF'],
    blend = 0.5,
    amplitude = 1.0,
    speed = 0.5,
}) {
    const containerRef = useRef(null);
    const rafRef = useRef(0);
    const oglRef = useRef(null);
    const propsRef = useRef({ colorStops, blend, amplitude, speed });

    // Keep latest props without rerender
    useEffect(() => {
        propsRef.current = {
            colorStops,
            blend: clamp01(blend),
            amplitude: Math.max(0, amplitude),
            speed: Math.max(0, speed),
        };
        // Update uniforms if GL already initialized
        if (oglRef.current && oglRef.current.program) {
            const { program } = oglRef.current;
            const stops = propsRef.current.colorStops.slice(0, 4);
            const num = stops.length;

            const toRGB = (hex) => {
                const h = hex.replace('#', '');
                const bigint = parseInt(h.length === 3 ? h.split('').map((c)=>c+c).join('') : h, 16);
                const r = ((bigint >> 16) & 255) / 255;
                const g = ((bigint >> 8) & 255) / 255;
                const b = (bigint & 255) / 255;
                return [r, g, b];
            };

            const colors = new Array(4).fill([0,0,0]).map((_, i) => stops[i] ? toRGB(stops[i]) : [0,0,0]);
            program.uniforms.uNumColors.value = num;
            // Flatten to vec3 array elements
            colors.forEach((rgb, i) => {
                program.uniforms.uColors.value[i] = rgb;
            });

            program.uniforms.uBlend.value = clamp01(propsRef.current.blend);
            program.uniforms.uAmplitude.value = Math.max(0, propsRef.current.amplitude);
            program.uniforms.uSpeed.value = Math.max(0, propsRef.current.speed);
        }
    }, [colorStops, blend, amplitude, speed]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return () => {};

        const renderer = new Renderer({ alpha: true, antialias: true, dpr: Math.min(2, window.devicePixelRatio || 1) });
        const { gl } = renderer;
        gl.clearColor(0, 0, 0, 0);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

        const triangle = new Triangle(gl);
        const uniforms = {
            uTime: { value: 0 },
            uResolution: { value: [1, 1] },
            uBlend: { value: clamp01(propsRef.current.blend) },
            uAmplitude: { value: Math.max(0, propsRef.current.amplitude) },
            uSpeed: { value: Math.max(0, propsRef.current.speed) },
            uNumColors: { value: Math.min(4, Math.max(2, propsRef.current.colorStops.length)) },
            uColors: { value: [[0,0,0],[0,0,0],[0,0,0],[0,0,0]] },
        };

        const program = new Program(gl, {
            vertex: VERT,
            fragment: FRAG,
            uniforms,
            transparent: true,
            depthTest: false,
            depthWrite: false,
        });

        const mesh = new Mesh(gl, { geometry: triangle, program });

        // Append canvas and size
        el.appendChild(gl.canvas);

        const setSize = () => {
            const w = Math.max(1, el.clientWidth || window.innerWidth);
            const h = Math.max(1, el.clientHeight || window.innerHeight);
            renderer.setSize(w, h);
            program.uniforms.uResolution.value = [w, h];
        };
        setSize();

        // Initialize color uniforms
        const stops = propsRef.current.colorStops.slice(0, 4);
        const toRGB = (hex) => {
            const h = hex.replace('#', '');
            const bigint = parseInt(h.length === 3 ? h.split('').map((c)=>c+c).join('') : h, 16);
            const r = ((bigint >> 16) & 255) / 255;
            const g = ((bigint >> 8) & 255) / 255;
            const b = (bigint & 255) / 255;
            return [r, g, b];
        };
        const colors = new Array(4).fill([0,0,0]).map((_, i) => stops[i] ? toRGB(stops[i]) : [0,0,0]);
        colors.forEach((rgb, i) => {
            program.uniforms.uColors.value[i] = rgb;
        });

        oglRef.current = { renderer, gl, program, mesh };

        let running = true;
        let start = performance.now();

        const update = () => {
            if (!running) return;
            const now = performance.now();
            const t = (now - start) / 1000; // seconds
            program.uniforms.uTime.value = t;
            renderer.render({ scene: mesh });
            rafRef.current = requestAnimationFrame(update);
        };
        rafRef.current = requestAnimationFrame(update);

        const onResize = () => setSize();
        window.addEventListener('resize', onResize);

        // Cleanup for StrictMode (mount/unmount twice)
        return () => {
            running = false;
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener('resize', onResize);
            try {
                if (gl && gl.canvas && gl.canvas.parentNode === el) {
                    el.removeChild(gl.canvas);
                }
            } catch (e) {
                // no-op
            }
            oglRef.current = null;
        };
    }, []);

    return (
        <div className={styles['aurora-container']} ref={containerRef} />
    );
}


