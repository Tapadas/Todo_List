import { useTodosContext } from "../contexts/todosContextProvider";
import { TodoItemProps } from "../lib/types";

export default function TodoList() {
  const { todos, onToggleTodo, onRemoveTodo } = useTodosContext();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
}

function TodoItem({ todo, onToggleTodo, onRemoveTodo }: TodoItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggleTodo(todo.id)}
      />
      {todo.title} - {todo.startDate} - {todo.endDate}
      <button className="btn btn-excluir" onClick={() => onRemoveTodo(todo.id)}>
        Excluir
      </button>
    </li>
  );
}
