function TodoList({ todos , setTodos }) {
    return (
        <ol className="todo_list">
        {todos && todos.length > 0 ? (
          todos?.map((item, index) => (
            <Item key={index} item={item} setTodos={setTodos} />
          ))
        ) : (
          <p>what are you up to?</p>
        )}
      </ol>
    );
  }

  function Item({ item, setTodos }) {
    const completeTodo = () => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === item.id
            ? { ...todo, is_completed: !todo.is_completed }
            : todo
        )
      );
    };
    return (
        <li id={item?.id} className="todo_item" >
        <button className={item.is_completed ? 'todo_items_left_done' : 'todo_items_left'} onClick={completeTodo}>
          <p>{item?.title}</p>
        </button>
        <div className="todo_items_right">
          <button>
            <span>Edit</span>
          </button>
          <button>
            <span>Delete</span>
          </button>
        </div>
      </li>
    );
  }
  export default TodoList;
  