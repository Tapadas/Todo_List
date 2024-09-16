type ToastProps = {
  toastMessage: string;
  setToastMessage: (message: string) => void;
};

export default function Toast({ toastMessage, setToastMessage }: ToastProps) {
  return (
    <div
      className={`toast hide align-items-center border-0 fade show position-fixed end-0 m-3 mt-5 `}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">{toastMessage}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
          onClick={() => setToastMessage("")}
        ></button>
      </div>
    </div>
  );
}
