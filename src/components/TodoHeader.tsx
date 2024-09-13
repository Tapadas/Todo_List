import NewTodoForm from "./NewTodoForm";
import Pagination from "./Pagination";

export default function TodoHeader() {
  return (
    <div className="row">
      <NewTodoForm />
      <Pagination />
    </div>
  );
}
