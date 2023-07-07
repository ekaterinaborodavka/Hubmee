import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import { Box, Checkbox, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ITodo } from "../store/types";
import { StyledCheckbox, StyledTodoItem } from "./styled";
import { DeleteModal } from "./DeleteModal";
import { deleteTodo, editTodo } from "../store/todoSlice";
import { AppDispatch } from "../store/store";

interface ITodoItem {
  todo: ITodo;
}

export const TodoListItem = ({ todo }: ITodoItem) => {
  const { title, done, id } = todo;
  const dispatch = useDispatch<AppDispatch>();

  const [open, setOpen] = useState(false);

  const onDeleteTodo = useCallback(() => {
    dispatch(deleteTodo(id));
    setOpen(false);
  }, [id, dispatch]);

  const toggleTodo = useCallback(() => {
    dispatch(editTodo(id));
  }, [id, dispatch]);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box
      mt={2}
      mb={2}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: 485 }}
    >
      <StyledCheckbox>
        <Checkbox aria-label='done' checked={done} onChange={toggleTodo} />
      </StyledCheckbox>
      <StyledTodoItem done={done}>{title}</StyledTodoItem>
      <IconButton aria-label='delete' onClick={handleOpen}>
        <DeleteForeverIcon sx={{ color: "#F33A3D", width: 16 }} />
      </IconButton>
      <DeleteModal open={open} setOpen={setOpen} onDelete={onDeleteTodo} />
    </Box>
  );
};
