import { useTodosContext } from "../contexts/todosContextProvider";
import { TodoItemProps } from "../lib/types";

export default function TodoList() {
  const {
    todos,
    handleToggleTodo,
    handleRemoveTodo,
    currentPage,
    todosPerPage,
  } = useTodosContext();

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  return (
    <table className="table align-middle" id="todos-datatable">
      <thead className="border-top">
        <tr>
          <th scope="col" className="col-4">
            Tarefa
          </th>
          <th scope="col" className="col-3">
            Data de criação
          </th>
          <th scope="col" className="col-3">
            Data de conclusão
          </th>
          <th scope="col" className="col-2"></th>
        </tr>
      </thead>
      <tbody>
        {currentTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleToggleTodo={handleToggleTodo}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))}
      </tbody>
    </table>
  );
}

function TodoItem({ todo, handleToggleTodo, handleRemoveTodo }: TodoItemProps) {
  return (
    <tr>
      <td scope="row">
        <div className="d-flex align-items-center gap-2">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => handleToggleTodo(todo.id)}
          />
          <span
            className={todo.done ? "text-decoration-line-through" : ""}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.title}
          </span>
          {todo.done && (
            <span className="badge text-bg-success rounded-pill">
              Concluída
            </span>
          )}
        </div>
      </td>
      <td>{todo.startDate}</td>
      <td>{todo.endDate}</td>
      <td>
        <button
          className="btn btn-exclude"
          onClick={() => handleRemoveTodo(todo.id)}
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}
