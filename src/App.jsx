import React from 'react'
import TodoList from './TodoList.jsx'
import TodoAddForm from './TodoAddForm.jsx'
// 努力的把程式讀懂 .. 但寫不出來
class TodoApp extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    list: ['起床','刷牙']
  }

  removeElement = (idx) => {

    this.state.list.splice(idx,1);
    this.setState({...this.state});
  }

  addElement = (text) => {
    this.state.list.push(text);
    this.setState({...this.state});
  }

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoAddForm addElement={this.addElement} />
        <TodoList list={this.state.list} removeElement={this.removeElement} />
      </div>
    );
  }
}

export default TodoApp;