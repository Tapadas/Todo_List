import { useTodosContext } from "../contexts/todosContextProvider";

export default function Counter() {
  const { todos } = useTodosContext();
  return <p className="col">Total de tarefas: {todos.length}</p>;
}
