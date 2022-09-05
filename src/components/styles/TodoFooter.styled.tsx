import styled from "styled-components";
import { inputBorderReduce } from "./AddIconForm.styled";

export const StyledFooter = styled.footer`
  position: relative;
  bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--list-background-color);
  color: var(--light-text-color);
  border-bottom-left-radius: ${inputBorderReduce}rem;
  border-bottom-right-radius: ${inputBorderReduce}rem;
  /* padding-block: 10px;
  padding-inline: 15px; */
  padding: 1rem;

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
      color: var(--hover-color);
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
      color: var(--hover-color);
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    bottom: -4rem;
    padding: 0.9rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: var(--list-background-color);
    left: 50%;
    translate: -50%;
    border-radius: ${inputBorderReduce}rem;
    column-gap: 1.5rem;
  }
`;
