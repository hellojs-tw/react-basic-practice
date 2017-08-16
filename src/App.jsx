import React from 'react'
import TodoList from './TodoList.jsx'
import TodoAddForm from './TodoAddForm.jsx'

class TodoApp extends React.Component {
  state = {
    todos:[]
  }
  addToDo = (go) =>{
    this.setState({todos:this.state.todos.concat(go)});
    console.log(this.state);
  }
  deleteToDo = (away) =>{
    this.state.todos.splice(away,1);
    this.setState({todos:this.state.todos});
  } 
  render() {
    return (
      <div>
        <h2>Todo App之我不會只能參考助教的</h2>
        <TodoAddForm  addToDo={this.addToDo}/>
        <TodoList todos={this.state.todos} deleteToDo={this.deleteToDo}/>
      </div>
    );
  }
}

export default TodoApp;