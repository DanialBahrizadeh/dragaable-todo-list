import styled from "styled-components";

import { formHeight, textPadding } from "./AddIconForm.styled";

import type { ThemeProps } from "../../model/Theme";

interface StyledButtonProps {
  isDone: boolean;
}

const width = formHeight / 3;

export const ButtonContainer = styled.div<StyledButtonProps>`
  width: ${width}px;
  height: ${width}px;
  border-radius: 100%;
  background-image: linear-gradient(
    45deg,
    hsl(192deg 100% 67%) 0%,
    hsl(202deg 99% 67%) 11%,
    hsl(212deg 96% 66%) 22%,
    hsl(221deg 95% 66%) 33%,
    hsl(231deg 94% 66%) 44%,
    hsl(241deg 93% 66%) 56%,
    hsl(251deg 91% 66%) 67%,
    hsl(261deg 90% 65%) 78%,
    hsl(270deg 88% 65%) 89%,
    hsl(280deg 87% 65%) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${textPadding - 40}px;
  cursor: pointer;
  transition-duration: 300ms;
  &:hover {
    width: ${width + 2}px;
    height: ${width + 2}px;
    ${({ isDone }) => isDone && "display: none"}
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${width}px;
  height: ${width}px;
  border-radius: 100%;
  background-color: ${({ theme }: ThemeProps) => theme.listBackgroundColor};
  border: ${({ theme }: ThemeProps) => theme.borderColor} 1px solid;
  cursor: pointer;

  &::before {
    content: "";
    display: ${({ isDone }) => (isDone ? "block" : "none")};
    position: relative;
    width: calc(100% + 1px);
    height: calc(100% + 1px);
    border-radius: 100%;
    background-image: linear-gradient(
      45deg,
      hsl(192deg 100% 67%) 0%,
      hsl(202deg 99% 67%) 11%,
      hsl(212deg 96% 66%) 22%,
      hsl(221deg 95% 66%) 33%,
      hsl(231deg 94% 66%) 44%,
      hsl(241deg 93% 66%) 56%,
      hsl(251deg 91% 66%) 67%,
      hsl(261deg 90% 65%) 78%,
      hsl(270deg 88% 65%) 89%,
      hsl(280deg 87% 65%) 100%
    );
  }
`;
