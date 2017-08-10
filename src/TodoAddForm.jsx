import React from 'react'

class TodoAddForm extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    inputText: ''
  }

  handleChange = (event) => {
    this.setState({ ...this.state, inputText: event.target.value })
  }

  handleClick = (event) => {
    // pass userinput to the parent component
    this.props.addElement(this.state.inputText);
    // clear userinput
    this.setState({ ...this.state, inputText: "" });
    // focus on input
    this.nameInput.focus();
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    return (
      <div>
        <input ref={(input) => { this.nameInput = input; }} type="text" value={this.state.inputText} onChange={this.handleChange} />
        <button onClick={this.handleClick}>新增</button>
      </div>
    );
  }
}

export default TodoAddForm;