import React from 'react'

class TodoAddForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: ''
    }
  }

  onTextChange(evt) {
    this.setState({
      inputText: evt.target.value
    })
  }

  addText(evt) {
    if (this.state.inputText !== ''){
      const { addTodo } = this.props
      addTodo(this.state.inputText)
    }
  }

  
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputText} onChange={evt => this.onTextChange(evt)}/>
        <button onClick={evt => this.addText(evt)}>新增</button>
      </div>
    );
  }
}

export default TodoAddForm;