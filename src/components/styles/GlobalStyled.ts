import { createGlobalStyle } from "styled-components";
import type { ThemeProps } from "../../model/Theme";
export const GlobalStyled = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body,
    #root {
        height: 100vh;
        background-color: ${({ theme }: ThemeProps) => theme.backgroundColor};
        font-size: 1.125rem;
        color: ${({ theme }: ThemeProps) => theme.textColor};
        position: relative;
        z-index: -999;
        font-family: 'Josefin Sans', sans-serif;;
    }
`;
