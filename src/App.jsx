import React from 'react'
import TodoList from './TodoList.jsx'
import TodoAddForm from './TodoAddForm.jsx'

class TodoApp extends React.Component {
  state = {
    todos: ['Hello','world']
  }
  addTodo = (val) => {
    this.state.todos.push(val);
    this.setState({todos:this.state.todos});
  }
  removeTode = (id) => {
    this.state.todos.splice(id,1)
    this.setState({todes:this.state.todes})
  }

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoAddForm addTodo={this.addTodo}></TodoAddForm>
        <TodoList todos={this.state.todos} removeTode={this.removeTode}></TodoList>
      </div>
    );
  }
}

export default TodoApp;
