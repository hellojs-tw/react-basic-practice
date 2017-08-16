import React from 'react'

class TodoAddForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: ''
    }
  }
    handleChange = (e) => {

      this.setState({inputText: e.target.value})
    }

    addTodo = () => {
      if (this.state.inputText !== "") {
        this.props.addTodo(this.state.inputText.trim());
        this.setState({inputText:""})
      }
    }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputText} onChange={this.handleChange}/>
        <button onClick={this.addTodo}>新增</button>
      </div>
    );
  }
}

export default TodoAddForm;
