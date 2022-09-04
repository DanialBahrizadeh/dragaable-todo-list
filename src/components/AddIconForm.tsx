import Button from "./Button";
import { AddInput, StyledForm, AddButton } from "./styles/AddIconForm.styled";
import { AiFillFolderAdd } from "react-icons/ai";
import { FormEvent, useState } from "react";
import { addTodoList, useGetTodoList } from "../hooks/TodoListHooks";
import { nanoid } from "nanoid";
const AddIconForm = () => {
  const dispatch = useGetTodoList()[1];
  const [value, setValue] = useState("");
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
