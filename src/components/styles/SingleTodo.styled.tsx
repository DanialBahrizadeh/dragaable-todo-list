import styled from "styled-components";
import {
  formHeight,
  inputBorderReduce,
  textPadding,
} from "./AddIconForm.styled";

type StyledSingleTodoProps = {
  isDone: boolean;
};

export const StyledSingleTodo = styled.div<StyledSingleTodoProps>`
  width: 100%;
  height: ${formHeight}px;
  background-color: var(--list-background-color);
  position: relative;
  padding-left: ${textPadding}px;
  display: flex;
  align-items: center;
  border-bottom: var(--border-color) 1px solid;
  ${({ isDone }) =>
    isDone &&
    `
    text-decoration: line-through;
    color: var(--light-text-color);
  `}

  :first-child {
    border-top-left-radius: ${inputBorderReduce}rem;
    border-top-right-radius: ${inputBorderReduce}rem;
  }

  &:hover > button:last-child {
    display: block;
  }

  & > span {
    margin-top: 3px;
  }
`;
