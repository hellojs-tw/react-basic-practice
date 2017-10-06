import React from 'react'
import TodoList from './TodoList.jsx'
import TodoAddForm from './TodoAddForm.jsx'

class TodoApp extends React.Component {
  state = {
    todos: [],
  }
  addTodo = (data) => {
    let todos = [...this.state.todos, data]
    this.setState({ todos })
  }

  removeTodo = (index) => {
    let todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoAddForm addTodo={this.addTodo} />
        <TodoList removeTodo={this.removeTodo} todos={this.state.todos}/>
      </div>
    );
  }
}

export default TodoApp;