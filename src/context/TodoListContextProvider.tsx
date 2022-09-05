import { nanoid } from "nanoid";
import { createContext } from "react";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import type { Todo } from "../model/Todo";
export type TodoState = {
  todos: Todo[];
};

export type ActionTodoReducer = {
  type:
    | "ADD_TODO"
    | "REMOVE_TODO"
    | "UPDATE_TODO"
    | "DROG_DROP_TODO"
    | "REMOVE_ALL_COMPLETED_TODOS";
  payload?: Todo[] | Todo;
};

export type Reducer = (
  state: TodoState,
  action: ActionTodoReducer
) => TodoState;

type TodoListContextType = [
  state: TodoState,
  reducer: React.Dispatch<ActionTodoReducer>
];

export const TodoListContext = createContext<TodoListContextType>(
  {} as TodoListContextType
);

export const TodoListContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const reducer: Reducer = (state, action) => {
    if (
      action.type !== "REMOVE_ALL_COMPLETED_TODOS" &&
      action.payload === undefined
    ) {
      return state;
    }

    const payload = Array.isArray(action.payload)
      ? (action.payload as Todo[])
      : ([action.payload] as Todo[]);
    switch (action.type) {
      case "ADD_TODO":
        return { ...state, todos: [...state.todos, ...payload] };
      case "REMOVE_TODO":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== payload[0]?.id),
        };
      case "UPDATE_TODO":
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === payload[0]?.id ? payload[0] : todo
          ),
        };
      case "DROG_DROP_TODO":
        return { ...state, todos: payload };
      case "REMOVE_ALL_COMPLETED_TODOS":
        return { ...state, todos: state.todos.filter((todo) => !todo.isDone) };
      default:
        return state;
    }
  };

  const initialState: TodoState = {
    todos: [
      {
        id: nanoid(),
        value: "First Task",
        isDone: false,
      },
      {
        id: nanoid(),
        value: "Second Task",
        isDone: false,
      },
      {
        id: nanoid(),
        value: "Fourth Task",
        isDone: false,
      },
      {
        id: nanoid(),
        value: "Fifth Task",
        isDone: false,
      },
      {
        id: nanoid(),
        value: "Sixth Task",
        isDone: false,
      },
    ],
  };
  const [state, dispatch] = useLocalStorageReducer(
    "todos",
    reducer,
    initialState
  );

  return (
    <TodoListContext.Provider value={[state, dispatch]}>
      {children}
    </TodoListContext.Provider>
  );
};
