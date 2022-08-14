import { useEffect, useRef } from 'react';

function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}

function useInterval(
  fn: () => void,
  delay: number | null,
  options?: {
    immediate?: boolean;
  },
) {
  const { immediate } = options || {};

  const fnRef = useLatest(fn);

  useEffect(() => {
    if (typeof delay !== 'number' || delay < 0) return;
    if (immediate) {
      fnRef.current();
    }
    const timer = setInterval(() => {
      fnRef.current();
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [delay]);
}

export default useInterval;
