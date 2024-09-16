import NewTodoForm from "./NewTodoForm";
import Pagination from "./Pagination";

export default function TodoHeader() {
  return (
    <div className="row d-flex gap-48">
      <div className="col-6">
        <NewTodoForm />
      </div>
      <div className="col-6 d-flex align-items-end justify-content-end">
        <Pagination />
      </div>
    </div>
  );
}
