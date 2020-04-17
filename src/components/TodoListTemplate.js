import React from "react";
import "./TodoListTemplate.css";

//form prop은 JSX형식으로 넘어온다.

const TodoListTemplate = ({ form, children }) => {
  return (
    <main className="todo-list-template">
      <div className="title">TodoList</div>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};
export default TodoListTemplate;
