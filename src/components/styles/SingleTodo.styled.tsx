import styled from "styled-components";
import {
  formHeight,
  inputBorderReduce,
  textPadding,
} from "./AddIconForm.styled";

import type { ThemeProps } from "../../model/Theme";

type StyledSingleTodoProps = {
  isDone: boolean;
};

export const StyledSingleTodo = styled.div<StyledSingleTodoProps>`
  width: 100%;
  height: ${formHeight}px;
  background-color: ${({ theme }: ThemeProps) => theme.listBackgroundColor};
  position: relative;
  padding-left: ${textPadding}px;
  display: flex;
  align-items: center;
  border-bottom: ${({ theme }: ThemeProps) => theme.borderColor} 1px solid;
  ${({ isDone }) =>
    isDone &&
    `
    text-decoration: line-through;
    color: rgba(202, 205, 232, 50%);
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
