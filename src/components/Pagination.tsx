import { useTodosContext } from "../contexts/todosContextProvider";

const todosPerPageOptions = [8, 16, 24];

export default function Pagination() {
  const {
    totalPages,
    currentPage,
    todosPerPage,
    handlePageChange,
    handleTodosPerPage,
  } = useTodosContext();

  const pageOptions = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  console.log(pageOptions);

  return (
    <div className="d-flex gap-3 justify-content-end">
      <p className="m-0 align-self-center">
        Página {currentPage} de {totalPages}
      </p>
      <div className="d-flex gap-1">
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center m-0 d-flex gap-1">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <a
                className="page-link"
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Anterior
              </a>
            </li>
            {pageOptions.map((page) => (
              <li
                key={page}
                className={`page-item ${currentPage === page ? "active" : ""}`}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </a>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Seguinte
              </a>
            </li>
          </ul>
        </nav>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {todosPerPage}
          </button>
          <ul className="dropdown-menu">
            {todosPerPageOptions.map((option) => (
              <li key={option}>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleTodosPerPage(option)}
                >
                  {option}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
