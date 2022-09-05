import { useEffect, useState } from "react";

export const useSessionStorage = <T>(
  key: string,
  initialValue: T | (() => T)
) => {
  const [state, setState] = useState<T>(() => {
    const josnValue = sessionStorage.getItem(key);
    if (josnValue) return JSON.parse(josnValue);

    if (typeof initialValue === "function") return (initialValue as () => T)();

    return initialValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));

    return () => {
      sessionStorage.removeItem(key);
    };
  }, [key, state]);

  return [state, setState] as [typeof state, typeof setState];
};
