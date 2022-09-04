import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeProvider";
import { TodoListContextProvider } from "./context/TodoListContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <ThemeProvider>
    <TodoListContextProvider>
      <App />
    </TodoListContextProvider>
  </ThemeProvider>
  // </React.StrictMode>
);
