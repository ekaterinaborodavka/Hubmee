export interface ITodo {
  id: number;
  title: string;
  done: boolean;
}

export interface ITodoState {
  todo: ITodo[];
  filteredTodo: ITodo[];
  doneFilter: boolean;
}
