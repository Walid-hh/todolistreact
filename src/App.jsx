import React from "react";
import Form from "./Form.jsx";
import Header from "./Header.jsx";
import Todo from "./Todo.jsx";
import TodoList from "./TodoList.jsx";
function App() {
  const [todos, setTodos] = React.useState([]);
  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;
  return (
    <div className="wrapper">
      <Header />
      <Todo todos_completed={todos_completed} total_todos={total_todos} />
      <Form setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} />
      </div>
  );
}
export default App;