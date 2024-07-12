function Todo({ todos_completed, total_todos }) {
    return (
      <section className="todo">
        <p>Todo tasks</p>
        <div>
          <p>you have completed {todos_completed}/{total_todos} of your tasks</p>
        </div>
      </section>
    );
  }
  export default Todo;
  