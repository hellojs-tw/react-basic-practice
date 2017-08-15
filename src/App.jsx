import React from 'react'
import TodoList from './TodoList.jsx'
import TodoAddForm from './TodoAddForm.jsx'

const todos = [];

class TodoApp extends React.Component {
  state = {
    todos: []
  }

  addTodo = (val) => {
    this.setState({
      todos: this.state.todos.concat(val),
    });
    console.log(this.state);
  }

  deleteTodo = (index) => {
    console.log('index:', index);
    console.log(this.state.todos.splice(index, 1)); //Array.splice(start, deleteCount) return an array containing the deleted elements
    this.setState({
      todos: this.state.todos
    });
  }

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoAddForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} delTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default TodoApp;