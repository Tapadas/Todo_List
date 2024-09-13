export interface Todo {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  done: boolean;
}

export interface TodoItemProps {
  todo: Todo;
  onToggleTodo: (id: number) => void;
  onRemoveTodo: (id: number) => void;
}
