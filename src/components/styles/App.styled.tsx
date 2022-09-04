import styled from "styled-components";
import darkImg from "../../images/bg-desktop-dark.jpg";
import lightImg from "../../images/bg-desktop-light.jpg";
import type { ThemeProps } from "../../model/Theme";
const imgs = {
  darkImg,
  lightImg,
};

export const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const HeaderImg = styled.header`
  width: 100%;
  height: 40%;
  background-image: url(${({ theme }: ThemeProps) => imgs[theme.img]});
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
  bottom: 0;
  font-weight: 400;
  color: ${({ theme }: ThemeProps) => theme.lightTextColor};
`;
