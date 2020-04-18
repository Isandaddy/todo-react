import React, { Component } from "react";
import "./styles.css";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
  id = 2;
  state = {
    input: "",
    todos: [
      { id: 0, text: "react", checked: true },
      { id: 1, text: "react2", checked: false }
    ]
  };

  handleChange = e => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "", // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };

  handleKeyPress = e => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    console.log(e.key);
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress } = this;
    return (
      <div className="App">
        <TodoListTemplate
          form={
            <Form
              onChange={handleChange}
              value={input}
              onCreate={handleCreate}
              onKeyPress={handleKeyPress}
            />
          }
        >
          <TodoItemList todos={todos} />
        </TodoListTemplate>
      </div>
    );
  }
}
export default App;
