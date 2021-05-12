import React from 'react'

class InputList extends React.Component {
    constructor() {
        super();
        this.state = {
        item: '',
        units: '',
        quantity: 0,
        isPurchased: false
        } 
    }
    
        handleChange=(event)=> {
        let name = event.target.name;
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (    
                <div className="inputlist">
                    <h3>Add Items:</h3>
                    <form onSubmit= {(event) => this.props.handleSubmit(this.state, event)}>
                        <label for="item">Item:
                            <input type="text" name="item" value={this.state.item} onChange={this.handleChange}/>
                        </label>
                        <label for="item">Units:
                            <input type="text" name="units" value={this.state.units} onChange={this.handleChange}/>
                        </label>
                        <label for="item">Qty:
                            <input type="text" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
                        </label>
                        <label for="item">Purchased:
                            <input type="text" name="isPurchased" value={this.state.isPurchased} onChange={this.handleChange}/>
                        </label>
                            <input type="submit" value="Submit"/>
                    </form>
                </div>
        )
    }

}


export default InputList
