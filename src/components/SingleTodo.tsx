import { Draggable } from "react-beautiful-dnd";
import { Todo } from "../model/Todo";
import Button from "./Button";
import DeleteButton from "./DeleteButton";
import { StyledSingleTodo } from "./styles/SingleTodo.styled";

interface SingleTodoProps {
  todo: Todo;
  index: number;
}

const SingleTodo: React.FC<SingleTodoProps> = ({ todo, index }) => {
  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => {
        return (
          <StyledSingleTodo
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDone={todo.isDone}
          >
            <Button isDone={todo.isDone} todo={todo} />
            <span>{todo.value}</span>
            <DeleteButton todo={todo} />
          </StyledSingleTodo>
        );
      }}
    </Draggable>
  );
};

export default SingleTodo;
