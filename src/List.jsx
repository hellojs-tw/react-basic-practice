import React from 'react'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input_text: '',
        }

    }

    onTextChange(evt) {
        this.setState({
            input_text: evt.target.value
        })
    }

    render() {
        const items = ['a', 'b', 'c', 'd', 'e']
        return (
            <div>
                <input type="text"  
                    value={this.state.input_text} 
                    onChange={evt => this.onTextChange(evt)}/>
            </div>
        )
    }
}

export default List