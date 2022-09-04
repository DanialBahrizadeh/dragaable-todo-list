import { useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { drogDropTodoList, useGetTodoList } from "../hooks/TodoListHooks";
import AddIconForm from "./AddIconForm";
import SingleTodo from "./SingleTodo";
import { ItemHolder, StyledTodoList } from "./styles/TodoList.styled";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";
import type { Todo } from "../model/Todo";

const TodoList: React.FC = () => {
  const [{ todos }, dispatch] = useGetTodoList();
  const [filter, setFilter] = useState({
    all: true,
    active: false,
    completed: false,
  });

  let filteredTodos: Todo[] = [];

  if (filter.completed) {
    filteredTodos = todos.filter((todo) => todo.isDone);
  } else if (filter.active) {
    filteredTodos = todos.filter((todo) => !todo.isDone);
  } else {
    filteredTodos = todos;
  }

  let todosElements = filteredTodos.map((todo, index) => {
    return <SingleTodo key={todo.id} todo={todo} index={index} />;
  });

  const handleDrag = (result: DropResult) => {
    if (!result.destination) return;

    const todosClone = [...todos];
    const [removed] = todosClone.splice(result.source.index, 1);
    todosClone.splice(result.destination.index, 0, removed);
    drogDropTodoList(dispatch, todosClone);
  };
  return (
    <StyledTodoList>
      <TodoHeader />
      <AddIconForm />
      <DragDropContext onDragEnd={handleDrag}>
        <Droppable droppableId="todos">
          {(provided) => {
            return (
              <ItemHolder {...provided.droppableProps} ref={provided.innerRef}>
                {todosElements}
                {provided.placeholder}
              </ItemHolder>
            );
          }}
        </Droppable>
      </DragDropContext>
      <TodoFooter filter={filter} setFilter={setFilter} />
    </StyledTodoList>
  );
};
export default TodoList;
