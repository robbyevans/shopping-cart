import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      // If window is undefined (e.g., during server-side rendering), return the initial value
      return typeof initialValue === "function"
        ? (initialValue as () => T)()
        : initialValue;
    }

    try {
      const jsonValue = localStorage.getItem(key);
      if (jsonValue != null) return JSON.parse(jsonValue);
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
    }

    return typeof initialValue === "function"
      ? (initialValue as () => T)()
      : initialValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    }
  }, [key, value]);

  return [value, setValue];
}
