import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  render() {
    //todos: todo 객체들이 들어있는 배열
    //onToggle: 체크박스를 키고 끄는 함수
    //onRemove: 아이템을 삭제시키는 함수
    const { todos, onToggle, onRemove } = this.props;
    return (
      <div>
        <TodoItem text="hello" />
        <TodoItem text="react" />
      </div>
    );
  }
}

export default TodoItemList;
