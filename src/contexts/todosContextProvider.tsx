import { createContext, useContext, useEffect, useState } from "react";
import { Todo } from "../lib/types";
import { initialTodos } from "../lib/constants";
import Toast from "../components/Toast";

interface TodosContextType {
  todos: Todo[];
  currentPage: number;
  todosPerPage: number;
  totalPages: number;
  handlePageChange: (pageNumber: number) => void;
  handleToggleTodo: (id: number) => void;
  handleAddTodo: (todo: Todo) => void;
  handleRemoveTodo: (id: number) => void;
  handleTodosPerPage: (todosPerPage: number) => void;
  toastMessage: string;
}

export const todosContext = createContext<TodosContextType>(
  {} as TodosContextType
);

export default function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(8);
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      return JSON.parse(storedTodos);
    }
    return initialTodos;
  });
  const [toastMessage, setToastMessage] = useState("");
  const totalPages = Math.ceil(todos.length / todosPerPage);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    const timer = setTimeout(() => {
      setToastMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [todos]);

  const handleToggleTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        const newTodo = {
          ...todo,
          done: !todo.done,
          endDate: todo.done
            ? "-"
            : new Date().toLocaleString("en-GB", {
                timeZone: "Europe/London",
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }),
        };
        if (newTodo.done) {
          setToastMessage("Tarefa concluída");
        }
        return newTodo;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleAddTodo = (todo: Todo) => {
    setTodos([todo, ...todos]);
    setToastMessage("Tarefa adicionada");
  };

  const handleRemoveTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setToastMessage("Tarefa removida");
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleTodosPerPage = (todosPerPage: number) => {
    setTodosPerPage(todosPerPage);
  };

  return (
    <todosContext.Provider
      value={{
        todos,
        handleToggleTodo,
        handleAddTodo,
        handleRemoveTodo,
        currentPage,
        todosPerPage,
        totalPages,
        handlePageChange,
        handleTodosPerPage,
        toastMessage,
      }}
    >
      {children}
      {toastMessage && (
        <Toast toastMessage={toastMessage} setToastMessage={setToastMessage} />
      )}
    </todosContext.Provider>
  );
}

export function useTodosContext() {
  const context = useContext(todosContext);
  return context;
}
