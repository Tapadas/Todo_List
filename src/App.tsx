import Footer from "./components/Footer";
import Logo from "./components/Logo";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodosContextProvider from "./contexts/todosContextProvider";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container-fluid d-flex flex-column align-items-center tarefas">
        <header className="d-flex me-auto main-logo-container">
          <Logo />
        </header>
        <main className="row frame">
          <h1 className="title">As minhas tarefas</h1>
          <TodosContextProvider>
            <TodoHeader />
            <TodoList />
            <TodoFooter />
          </TodosContextProvider>
        </main>
      </div>
      <footer className="mt-auto footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
