import { ITodo } from "./types";

export const editTodos = (todos: ITodo[], id: number) => {
  const idx = todos.findIndex((item) => item.id === id);
  const oldTodo = todos[idx];
  const newTodo = { ...oldTodo, done: !oldTodo.done };
  const newTodos = oldTodo.done
    ? [newTodo, ...todos.slice(0, idx), ...todos.slice(idx + 1)]
    : [...todos.slice(0, idx), ...todos.slice(idx + 1), newTodo];
  return newTodos;
};
