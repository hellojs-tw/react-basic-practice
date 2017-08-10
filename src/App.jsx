import React from 'react'
import TodoList from './TodoList.jsx'
import TodoAddForm from './TodoAddForm.jsx'

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    list: ['DefauleItem1','DefauleItem2']
  }

  removeElement = (idx) => {
    //不想用setState所以用forceUpdate
    this.state.list.splice(idx,1);
    this.forceUpdate();
  }

  addElement = (text) => {
    this.state.list.push(text);
    this.forceUpdate();
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