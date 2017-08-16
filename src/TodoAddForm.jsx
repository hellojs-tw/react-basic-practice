import React from 'react'

class TodoAddForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: ''
    };
  }
  handleChange = (E) => {
    this.setState({inputText: E.target.value});
  }
  addToDo = (E) =>{
    this.props.addToDo(this.state.inputText);
    this.setState({inputText:''});
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputText} onChange = {this.handleChange}/>
        <button onClick = {this.addToDo}>新增</button>
      </div>
    );
  }
}

export default TodoAddForm;