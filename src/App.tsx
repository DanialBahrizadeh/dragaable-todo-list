import { GlobalStyled } from "./components/styles/GlobalStyled";
import {
  FooterText,
  HeaderImg,
  StyledApp,
} from "./components/styles/App.styled";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <StyledApp>
      <GlobalStyled />
      <HeaderImg />
      <TodoList />
      <FooterText>Drog and drop to reorder list</FooterText>
    </StyledApp>
  );
};
export default App;
