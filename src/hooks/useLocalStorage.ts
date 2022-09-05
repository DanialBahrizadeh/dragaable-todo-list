import { useEffect, useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T | (() => T)
) => {
  const [state, setState] = useState<T>(() => {
    const value = localStorage.getItem(key);

    if (value) return JSON.parse(value);

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));

    return () => {
      localStorage.removeItem(key);
    };
  }, [state, key]);

  return [state, setState] as [typeof state, typeof setState];
};
