import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    //text: todo 내용
    //checked: 체크박스 상태
    //id: todo 의 고유 아이디
    //onToggle: 체크박스를 키고 끄는 함수
    //onRemove: 아이템을 삭제시키는 함수
    const { text, checked, id, onToggle, onRemove } = this.props;
    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation(); // 상위 박스의onToggle 이 실행되지 않도록 함
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`todo-text ${checked && "checked"}`}>
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">✓</div>}
      </div>
    );
  }
}

export default TodoItem;
