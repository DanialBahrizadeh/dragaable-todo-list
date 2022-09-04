import styled from "styled-components";
import { inputBorderReduce } from "./AddIconForm.styled";
import type { ThemeProps } from "../../model/Theme";

export const StyledFooter = styled.footer`
  position: relative;
  bottom: 30px;
  width: 100%;
  height: 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }: ThemeProps) => theme.listBackgroundColor};
  color: ${({ theme }: ThemeProps) => theme.lightTextColor};
  border-bottom-left-radius: ${inputBorderReduce}rem;
  border-bottom-right-radius: ${inputBorderReduce}rem;
  padding-block: 10px;
  padding-inline: 15px;

  span {
    font-size: 0.8rem;
  }

  button {
    background-color: transparent;
    border: none;
    color: inherit;
    font-family: inherit;
    cursor: pointer;

    &:hover {
      color: ${({ theme }: ThemeProps) => theme.hoverColor};
    }
  }

  input {
    display: none;
  }

  [data-active="true"] {
    color: hsl(220, 71%, 59%);
  }
`;

export const FilterButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 1rem;

  label:not([data-active="true"]) {
    cursor: pointer;

    &:hover {
      color: ${({ theme }: ThemeProps) => theme.hoverColor};
    }
  }
`;
