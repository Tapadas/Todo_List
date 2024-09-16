import { useTodosContext } from "../contexts/todosContextProvider";

export default function Counter() {
  const { todos } = useTodosContext();
  return <h6 className="counter">Total de tarefas: {todos.length}</h6>;
}
