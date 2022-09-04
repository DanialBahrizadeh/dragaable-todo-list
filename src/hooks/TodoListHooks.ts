import { useContext } from "react";
import {
  ActionTodoReducer,
  TodoListContext,
} from "../context/TodoListContextProvider";
import type { Todo } from "../model/Todo";

export const useGetTodoList = () => {
  return useContext(TodoListContext);
};

export const addTodoList = (
  dispatch: (value: ActionTodoReducer) => void,
  todo: Todo
) => {
  return dispatch({ type: "ADD_TODO", payload: todo });
};

export const removeTodoList = (
  dispatch: (value: ActionTodoReducer) => void,
  todo: Todo
) => {
  return dispatch({ type: "REMOVE_TODO", payload: todo });
};

export const updateTodoList = (
  dispatch: (value: ActionTodoReducer) => void,
  todo: Todo
) => {
  return dispatch({ type: "UPDATE_TODO", payload: todo });
};

export const drogDropTodoList = (
  dispatch: (value: ActionTodoReducer) => void,
  todos: Todo[]
) => {
  return dispatch({ type: "DROG_DROP_TODO", payload: todos });
};

export const removeAllCompleteTodoList = (
  dispatch: (value: ActionTodoReducer) => void
) => {
  return dispatch({ type: "REMOVE_ALL_COMPLETED_TODOS" });
};
