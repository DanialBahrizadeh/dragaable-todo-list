import { useThemeContext } from "../hooks/useThemeHooks";
import { MoonIcon, SunIcon } from "./Icons";
import { Header, IconHolder, Title } from "./styles/TodoHeader.styled";

const TodoHeader: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useThemeContext();

  const switchTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Header>
      <Title>TODO</Title>
      <IconHolder onClick={switchTheme}>
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </IconHolder>
    </Header>
  );
};
export default TodoHeader;
