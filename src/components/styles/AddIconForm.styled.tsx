import styled from "styled-components";
import type { ThemeProps } from "../../model/Theme";

export const formHeight = 65;

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  height: ${formHeight}px;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const textPadding = 60;
export const inputBorderReduce = 0.25;

export const AddInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }: ThemeProps) => theme.listBackgroundColor};
  color: inherit;
  border: none;
  border-radius: ${inputBorderReduce}rem;
  padding-top: 3px;
  padding-left: ${textPadding}px;
  font-family: inherit;
  font-size: inherit;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }: ThemeProps) => theme.lightTextColor};
  }
`;

export const AddButton = styled.button`
  background-color: transparent;
  color: inherit;
  position: absolute;
  right: 15px;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
