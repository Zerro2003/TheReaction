import { useState, useCallback } from "react";

export function useCounter(initialValue: number = 0, step: number = 1) {
  const [count, setCount] = useState<number>(initialValue);

  const increment = useCallback(() => setCount((c) => c + step), [step]);
  const decrement = useCallback(() => setCount((c) => c - step), [step]);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);
  const setTo = useCallback((value: number) => setCount(value), []);

  return { count, increment, decrement, reset, setTo };
}
