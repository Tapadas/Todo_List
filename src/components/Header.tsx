import NewTodoForm from "./NewTodoForm";
import Pagination from "./Pagination";

export default function Header() {
  return (
    <>
      <div>
        <h1>As minhas tarefas</h1>
      </div>

      <div>
        <NewTodoForm />
        <Pagination />
      </div>
    </>
  );
}
