import { ChangeEvent } from "react";
import {
  removeAllCompleteTodoList,
  useGetTodoList,
} from "../hooks/TodoListHooks";
import {
  FilterButtonsContainer,
  StyledFooter,
} from "./styles/TodoFooter.styled";

interface TodoFooterProps {
  filter: {
    all: boolean;
    active: boolean;
    completed: boolean;
  };
  setFilter: React.Dispatch<
    React.SetStateAction<{
      all: boolean;
      active: boolean;
      completed: boolean;
    }>
  >;
}

const TodoFooter: React.FC<TodoFooterProps> = ({ filter, setFilter }) => {
  const [{ todos }, dispatch] = useGetTodoList();

  const itemsLeft = todos.filter((todo) => !todo.isDone).length;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter((prevFilter) => ({
      all: false,
      active: false,
      completed: false,
      [e.target.value]:
        !prevFilter[e.target.value as "all" | "active" | "completed"],
    }));
  };

  const deleteAllCompletedTodos = () => {
    removeAllCompleteTodoList(dispatch);
  };

  return (
    <StyledFooter>
      <span>{itemsLeft} items left</span>
      <FilterButtonsContainer>
        <label htmlFor="all" data-active={filter.all}>
          All
        </label>
        <input
          type="radio"
          name="filter"
          value="all"
          checked={filter.all}
          onChange={handleChange}
          id="all"
        />

        <label htmlFor="active" data-active={filter.active}>
          Active
        </label>
        <input
          type="radio"
          name="filter"
          value="active"
          checked={filter.active}
          onChange={handleChange}
          id="active"
        />

        <label htmlFor="completed" data-active={filter.completed}>
          Completed
        </label>
        <input
          type="radio"
          name="filter"
          value="completed"
          checked={filter.completed}
          onChange={handleChange}
          id="completed"
        />
      </FilterButtonsContainer>
      <button onClick={deleteAllCompletedTodos}>Clear Completed</button>
    </StyledFooter>
  );
};
export default TodoFooter;
