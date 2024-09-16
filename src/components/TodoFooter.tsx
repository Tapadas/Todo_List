import Counter from "./Counter";
import Pagination from "./Pagination";

export default function TodoFooter() {
  return (
    <div className="row">
      <div className="col">
        <Counter />
      </div>
      <div className="col">
        <Pagination />
      </div>
    </div>
  );
}
