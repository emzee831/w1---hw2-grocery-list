import React from 'react'

const textAreaStyle = { //variable for text input
    width: 235,
    margin: 5
  };

class InputList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            toDoList: []
        };     
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            toDoList: itemsArray
        });
    }
    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }
    
    
    render() {
        const inputList = this.state.toDoList.map(function(item){
            return <li>{item}</li>;
        });

        return (    
                <div className="inputlist">
                    <textarea
                    onChange={this.handleChange}
                    value={this.state.userInput}
                    style={textAreaStyle}
                    placeholder="Enter Items"
                    contentEditable= 'true'
                    /><br/>
                    <button onClick={this.handleSubmit}>Create items, seperate with commas</button>
                    <h3>My Grocery list:</h3>
                    <ul>{inputList}</ul>
                </div>
        );
    }

}


export default InputList
