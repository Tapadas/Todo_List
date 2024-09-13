import Footer from "./components/Footer";
import Header from "./components/Header";
import Logo from "./components/Logo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Logo />
      <main>
        <Header />
        <TodoList />
      </main>
      <Footer />
    </>
  );
}

export default App;
