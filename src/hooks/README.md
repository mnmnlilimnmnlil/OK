# Intersection Observer 훅 사용법

## 기본 사용법

```jsx
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function MyComponent() {
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={isIntersecting ? 'visible' : 'hidden'}>
      내용
    </div>
  );
}
```

## 옵션

- `threshold`: 교차점 임계값 (0-1, 기본값: 0.1)
- `rootMargin`: 루트 마진 (기본값: '0px')
- `triggerOnce`: 한 번만 트리거할지 여부 (기본값: false)

## 여러 요소 관찰

```jsx
import { useMultipleIntersectionObserver } from '../hooks/useIntersectionObserver';

function MyComponent() {
  const elements = [
    { ref: useRef(), options: { threshold: 0.2 } },
    { ref: useRef(), options: { threshold: 0.5 } }
  ];
  
  const states = useMultipleIntersectionObserver(elements);
  
  return (
    <div>
      <div ref={elements[0].ref}>
        {states[0].isIntersecting ? '보임' : '안보임'}
      </div>
      <div ref={elements[1].ref}>
        {states[1].isIntersecting ? '보임' : '안보임'}
      </div>
    </div>
  );
}
```

## 스크롤 애니메이션

```jsx
import { useScrollAnimation } from '../hooks/useIntersectionObserver';

function MyComponent() {
  const { ref, isVisible, animationClass } = useScrollAnimation({
    threshold: 0.2,
    animationClass: 'fade-in',
    delay: 200
  });

  return (
    <div ref={ref} className={`my-element ${animationClass}`}>
      애니메이션 요소
    </div>
  );
}
```

## CSS 애니메이션 예시

```scss
.my-element {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
  
  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }
}
```
