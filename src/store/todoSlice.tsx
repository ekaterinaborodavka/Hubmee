import { createSlice } from "@reduxjs/toolkit";
import { ITodoState, ITodo } from "./types";
import { editTodos } from "./utils";

const initialState: ITodoState = {
  todo: [] as ITodo[],
  filteredTodo: [] as ITodo[],
  doneFilter: false,
};

export const todoSlider = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.random(),
        title: action.payload.todo,
        done: false,
      };
      state.todo.unshift(newTodo);
      if (state.doneFilter) {
        state.filteredTodo.filter((item) => item.done).unshift(newTodo);
      } else {
        state.filteredTodo.unshift(newTodo);
      }
    },
    deleteTodo: (state, action) => {
      const { todo, filteredTodo } = state;
      state.todo = todo.filter((item) => item.id !== action.payload);
      state.filteredTodo = filteredTodo.filter((item) => item.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { todo, filteredTodo } = state;
      const todos = editTodos(todo, action.payload);
      const filteredTodos = editTodos(filteredTodo, action.payload);
      state.todo = todos;
      state.filteredTodo = filteredTodos;
    },
    searchTodo: (state, action) => {
      const { todo, filteredTodo } = state;
      if (action.payload.length === 0) {
        state.todo = todo;
        return;
      }
      state.filteredTodo = filteredTodo.filter(
        (item) => item.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
      );
    },
    allTodos: (state) => {
      const { todo } = state;
      state.filteredTodo = todo;
      state.doneFilter = false;
    },
    doneTodos: (state) => {
      const { todo } = state;
      state.filteredTodo = todo.filter((item) => item.done);
      state.doneFilter = true;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, searchTodo, allTodos, doneTodos } =
  todoSlider.actions;
export default todoSlider.reducer;
