import React from 'react'

class TodoAddForm extends React.Component {
  state = {
    inputText: ''
  }

  onChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  }

  addTodo = () => {
    this.props.addTodo(this.state.inputText);
  }
  
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputText} onChange={this.onChange}/>
        <button onClick={this.addTodo}>新增</button>
      </div>
    );
  }
}

export default TodoAddForm;