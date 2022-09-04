import { removeTodoList, useGetTodoList } from "../hooks/TodoListHooks";
import { Todo } from "../model/Todo";
import { CrossIcon } from "./Icons";
import { StyledDeleteButton } from "./styles/DeleteButton.styled";

interface DeleteButtonProps {
  todo: Todo;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ todo }) => {
  const dispatch = useGetTodoList()[1];
  const handleClick = () => {
    removeTodoList(dispatch, todo);
  };
  return (
    <StyledDeleteButton onClick={handleClick}>
      <CrossIcon />
    </StyledDeleteButton>
  );
};
export default DeleteButton;
