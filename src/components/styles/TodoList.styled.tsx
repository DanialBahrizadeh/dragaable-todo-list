import styled from "styled-components";

export const StyledTodoList = styled.main`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 100px;
  row-gap: 30px;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1440px) {
    width: 30%;
  }
`;

export const ItemHolder = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
