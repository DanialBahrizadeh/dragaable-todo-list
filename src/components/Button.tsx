import { useGetTodoList, updateTodoList } from "../hooks/TodoListHooks";
import { Todo } from "../model/Todo";
import { ButtonContainer, StyledButton } from "./styles/Button.styled";

interface ButtonProps {
  isDone: boolean;
  todo?: Todo;
}

const Button: React.FC<ButtonProps> = ({ isDone, todo }) => {
  const dispatch = useGetTodoList()[1];
  const handleClick = () => {
    if (todo) {
      updateTodoList(dispatch, { ...todo, isDone: !todo.isDone });
    }
  };

  return (
    <ButtonContainer isDone={isDone} onClick={handleClick}>
      <StyledButton isDone={isDone} onClick={handleClick}></StyledButton>
    </ButtonContainer>
  );
};
export default Button;
