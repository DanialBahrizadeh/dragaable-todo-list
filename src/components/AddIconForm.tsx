import Button from "./Button";
import { AddInput, StyledForm, AddButton } from "./styles/AddIconForm.styled";
import { AiFillFolderAdd } from "react-icons/ai";
import { FormEvent } from "react";
import { addTodoList, useGetTodoList } from "../hooks/TodoListHooks";
import { nanoid } from "nanoid";
import { useSessionStorage } from "../hooks/useSessionStorage";
const AddIconForm = () => {
  const dispatch = useGetTodoList()[1];
  const [value, setValue] = useSessionStorage("addInputValue", "");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value) {
      addTodoList(dispatch, {
        id: nanoid(),
        value,
        isDone: false,
      });
      setValue("");
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Button isDone={false} />
      <AddInput
        type="text"
        placeholder="Create a new todo..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <AddButton type="submit">
        <AiFillFolderAdd />
      </AddButton>
    </StyledForm>
  );
};
export default AddIconForm;
