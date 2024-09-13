import Counter from "./Counter";
import Pagination from "./Pagination";

export default function TodoFooter() {
  return (
    <div className="row">
      <Counter />
      <Pagination />
    </div>
  );
}
