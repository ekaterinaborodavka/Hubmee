import { useSelector } from "react-redux";

import { Box, Container, Typography } from "@mui/material";
import { SearchFild, AddTodoForm, TodoListItem } from "./components";
import { IRootState } from "./store/store";
import { ITodo } from "./store/types";
import { TodosContainer } from "./components/styled";

export const App = () => {
  const filteredTodo = useSelector((state: IRootState) => state.todo.filteredTodo);

  return (
    <Container maxWidth='xl' sx={{ display: "flex", justifyContent: "center" }}>
      <Box pl={2} sx={{ width: 556, background: "#FFF" }}>
        <SearchFild />
        <TodosContainer>
          {filteredTodo &&
            filteredTodo.map((item: ITodo) => <TodoListItem todo={item} key={item.id} />)}
          {!filteredTodo.length && <Typography m={2}>Tasks not found</Typography>}
        </TodosContainer>
        <AddTodoForm />
      </Box>
    </Container>
  );
};
