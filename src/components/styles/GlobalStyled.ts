import { createGlobalStyle } from "styled-components";
import type { ThemeProps } from "../../model/Theme";
export const GlobalStyled = createGlobalStyle`
    
    :root {
        --background-color: ${({ theme }: ThemeProps) => theme.backgroundColor};
        --text-color: ${({ theme }: ThemeProps) => theme.textColor};
        --list-background-color: ${({ theme }: ThemeProps) =>
          theme.listBackgroundColor};
          --light-text-color: ${({ theme }: ThemeProps) =>
            theme.lightTextColor};
            --border-color: ${({ theme }: ThemeProps) => theme.borderColor};
            --hover-color: ${({ theme }: ThemeProps) => theme.hoverColor}
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body,
    #root {
        min-height: 100vh;
        background-color: var(--background-color);
        font-size: 1.125rem;
        color: var(--text-color);
        position: relative;
        z-index: -999;
        font-family: 'Josefin Sans', sans-serif;;
    }
`;
