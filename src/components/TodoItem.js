import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  //todos의 checked를 현재props확인하여 checked가 다르면 상태변화감지하여 리렌더링
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

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
