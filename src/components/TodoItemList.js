import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  //최적화 리렌더링 결정 현재 todos의 변화를 감지하여 변화가 있을 경우에만 리렌더링
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    //todos: todo 객체들이 들어있는 배열
    //onToggle: 체크박스를 키고 끄는 함수
    //onRemove: 아이템을 삭제시키는 함수
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        text={text}
        checked={checked}
        id={id}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    ));
    return <div>{todoList}</div>;
  }
}

export default TodoItemList;
