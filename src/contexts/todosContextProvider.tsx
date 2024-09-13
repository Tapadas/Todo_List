import { createContext, useContext, useEffect, useState } from "react";
import { Todo } from "../lib/types";
import { initialTodos } from "../lib/constants";

interface TodosContextType {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
  onAddTodo: (todo: Todo) => void;
  onRemoveTodo: (id: number) => void;
}

export const todosContext = createContext<TodosContextType>(
  {} as TodosContextType
);

export default function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      return JSON.parse(storedTodos);
    }
    return initialTodos;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onToggleTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
          endDate: todo.done ? "-" : new Date().toLocaleString(),
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const onAddTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const onRemoveTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <todosContext.Provider
      value={{ todos, onToggleTodo, onAddTodo, onRemoveTodo }}
    >
      {children}
    </todosContext.Provider>
  );
}

export function useTodosContext() {
  const context = useContext(todosContext);
  return context;
}
