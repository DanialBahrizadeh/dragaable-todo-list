import styled from "styled-components";

import type { ThemeProps } from "../../model/Theme";

export const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const HeaderImg = styled.header`
  width: 100%;
  height: 40%;
  background-image: url(${({ theme }: ThemeProps) => theme.img});
  background-size: cover;
  background-position: top;
  position: absolute;
  top: 0;
  z-index: -1;
`;

export const FooterText = styled.footer`
  width: 100%;
  height: 8%;
  text-align: center;
  position: absolute;
  bottom: -6rem;
  font-weight: 400;
  color: var(--light-text-color);

  @media (max-width: 768px) {
    bottom: -8rem;
  }
`;
