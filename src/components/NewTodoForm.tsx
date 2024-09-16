import { useState } from "react";
import { useTodosContext } from "../contexts/todosContextProvider";
import { Todo } from "../lib/types";

export default function NewTodoForm() {
  const { handleAddTodo } = useTodosContext();
  const [text, setText] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text.trim()) return;
    const newTodo: Todo = {
      id: new Date().getTime(),
      title: text,
      done: false,
      startDate: new Date().toLocaleString("en-GB", {
        timeZone: "Europe/London",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      endDate: "-",
    };
    handleAddTodo(newTodo);

    setText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row g-2">
          <div className="col-8">
            <label htmlFor="newTodo" className="form-label">
              Descrição da tarefa:
            </label>
            <input
              type="text"
              id="newTodo"
              className="form-control "
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </div>

          <div className="col-4 d-flex align-items-end justify-content-end">
            <button type="submit" className="btn btn-custom" id="liveToastBtn">
              Adicionar Tarefa
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
