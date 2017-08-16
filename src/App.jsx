import React from 'react'
import TodoList from './TodoList.jsx'
import TodoAddForm from './TodoAddForm.jsx'
// import List from './List.jsx'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  addTodo(todo) {
    let update_todos = this.state.todos.slice(0)
    update_todos.push(todo)
    // console.log('update_todos', update_todos)
    this.setState({
      todos: update_todos
    })
  }

  deleteTodo(idx) {
    let update_todos = this.state.todos.slice(0)
    update_todos.splice(idx, 1)
    this.setState({
      todos: update_todos
    })
  }

  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoAddForm addTodo={this.addTodo.bind(this)} />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)}/>
      </div>
    )

  }
}

export default TodoApp;