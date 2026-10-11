import { useState, useEffect, useRef } from "react";

export function useThrottle(value, limit = 500) {
  const [throttled, setThrottled] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const elapsed = Date.now() - lastRan.current;
    const remaining = Math.max(0, limit - elapsed);

    const timer = setTimeout(() => {
      setThrottled(value);
      lastRan.current = Date.now();
    }, remaining);

    return () => clearTimeout(timer);
  }, [value, limit]);

  return throttled;
}