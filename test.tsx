import React, { useState } from "react";

type TodoListProps = {
  todos: string[];
  addTodo: (todo: string) => void;
};

export const TodoList = ({ todos, addTodo }: TodoListProps) => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
