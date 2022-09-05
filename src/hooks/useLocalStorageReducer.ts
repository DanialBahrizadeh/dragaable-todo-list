import { useEffect, useReducer } from "react";
import { Reducer, TodoState } from "../context/TodoListContextProvider";

export const useLocalStorageReducer = (
  key: string,
  reducer: Reducer,
  initialValue: TodoState
) => {
  const value = () => {
    const value = localStorage.getItem(key);

    if (value) return JSON.parse(value) as TodoState;

    return initialValue;
  };
  const [state, dispatch] = useReducer<Reducer>(reducer, value());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));

    return () => {
      localStorage.removeItem(key);
    };
  }, [state, key]);

  return [state, dispatch] as [typeof state, typeof dispatch];
};
