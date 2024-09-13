import { useState } from "react";
import { useTodosContext } from "../contexts/todosContextProvider";
import { Todo } from "../lib/types";

export default function NewTodoForm() {
  const { onAddTodo } = useTodosContext();
  const [text, setText] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: Todo = {
      id: Math.random(),
      title: text,
      done: false,
      startDate: new Date().toLocaleString(),
      endDate: "",
    };
    onAddTodo(newTodo);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="col">
      <label htmlFor="newTodo" className="form-label">
        Descrição da tarefa:
      </label>
      <div className="row g-2">
        <div className="col">
          <input
            type="text"
            id="newTodo"
            className="form-control "
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>

        <div className="col">
          <button type="submit" className="btn ">
            Adicionar Tarefa
          </button>
        </div>
      </div>
    </form>
  );
}
