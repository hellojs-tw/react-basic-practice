import React from 'react'

class TodoAddForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: ''
    }
  }
  
  handleChange= (event)=> {
    this.setState({inputText: event.target.value});
  }
  
  addTodo = () =>{
    this.props.addTodo(this.state.inputText);
    this.setState({inputText:''});
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