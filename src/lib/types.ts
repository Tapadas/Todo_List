export interface Todo {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  done: boolean;
}

export interface TodoItemProps {
  todo: Todo;
  handleToggleTodo: (id: number) => void;
  handleRemoveTodo: (id: number) => void;
}
