import { useEffect, useRef, useState } from 'react';

/**
 * Intersection Observer를 사용한 섹션 감지 훅
 * @param {Object} options - Intersection Observer 옵션
 * @param {number} options.threshold - 교차점 임계값 (0-1)
 * @param {string} options.rootMargin - 루트 마진
 * @param {boolean} options.triggerOnce - 한 번만 트리거할지 여부
 * @returns {Object} { ref, isIntersecting, hasIntersected }
 */
export const useIntersectionObserver = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);
        
        if (isElementIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, hasIntersected]);

  return {
    ref,
    isIntersecting: triggerOnce ? hasIntersected : isIntersecting,
    hasIntersected
  };
};

/**
 * 여러 요소를 동시에 관찰하는 훅
 * @param {Array} elements - 관찰할 요소들의 설정 배열
 * @param {Object} globalOptions - 전역 옵션
 * @returns {Array} 각 요소별 상태 배열
 */
export const useMultipleIntersectionObserver = (elements = [], globalOptions = {}) => {
  const [states, setStates] = useState(
    elements.map(() => ({
      isIntersecting: false,
      hasIntersected: false
    }))
  );

  useEffect(() => {
    const observers = elements.map((elementConfig, index) => {
      const { ref, options = {} } = elementConfig;
      const element = ref.current;
      
      if (!element) return null;

      const {
        threshold = globalOptions.threshold || 0.1,
        rootMargin = globalOptions.rootMargin || '0px',
        triggerOnce = globalOptions.triggerOnce || false
      } = options;

      const observer = new IntersectionObserver(
        ([entry]) => {
          const isElementIntersecting = entry.isIntersecting;
          
          setStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = {
              isIntersecting: isElementIntersecting,
              hasIntersected: newStates[index].hasIntersected || isElementIntersecting
            };
            return newStates;
          });
        },
        { threshold, rootMargin }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => {
        if (observer) observer.disconnect();
      });
    };
  }, [elements, globalOptions]);

  return states;
};

/**
 * 스크롤 기반 애니메이션을 위한 훅
 * @param {Object} options - 애니메이션 옵션
 * @returns {Object} { ref, isVisible, animationClass }
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.2,
    animationClass = 'animate-in',
    delay = 0
  } = options;

  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    triggerOnce: true
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isIntersecting, delay]);

  return {
    ref,
    isVisible: isIntersecting,
    animationClass: shouldAnimate ? animationClass : ''
  };
};

export default useIntersectionObserver;
