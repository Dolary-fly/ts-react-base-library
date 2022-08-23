import { time } from 'console';
import { useState, useEffect, useRef, useCallback } from 'react';
import useLatest from '../useLatest';

function useTimeout(fn: () => void, delay: number | undefined) {
  const fnRef = useLatest(fn);
  const timerRef = useRef<number>();
  useEffect(() => {
    if (!(typeof delay === 'number') || delay < 0) {
      return;
    }
    timerRef.current = window.setTimeout(() => {
      fnRef.current();
    }, delay);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [delay]);
  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);
  return clear;
}
export default useTimeout;
