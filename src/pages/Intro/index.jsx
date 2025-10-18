import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";
import styles from "./style.module.scss";

export default function Intro() {
  const canvasRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x0b0b0b, 1);

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(2, 2, 5);
    scene.add(light);

    const geometry = new THREE.IcosahedronGeometry(1, 2);
    const material = new THREE.MeshStandardMaterial({ color: 0x3399ff, roughness: 0.4, metalness: 0.6 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.z = 3;

    const animate = () => {
      mesh.rotation.y += 0.01;
      mesh.rotation.x += 0.005;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        navigate("/main");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      renderer.dispose();
    };
  }, [navigate]);

  return (
    <div className={styles.introContainer}>
      <canvas ref={canvasRef}></canvas>
      <h1 className={styles.introTitle}>OK</h1>
    </div>
  );
}
