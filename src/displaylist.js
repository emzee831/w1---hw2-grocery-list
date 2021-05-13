import React from 'react'
import groceries from './StartGroceries'


class Displaylist extends React.Component {


    handleClick=(index)=> {
    this.props.handleToggle(index)

    }
    handleRemove=(index)=> {
        this.props.removeItem(index)
    }

    render () {
        return (
            <div>
                <h1>Shopping Cart </h1>
                <ul className="grocery-list">
                    {this.props.groceries.map((grocery,index)=> 
                    <li key={index}>Added to list: {grocery.item}, {grocery.quantity}, {grocery.units} 
                        <button onClick={(event) => this.handleClick(index, event)}>Add to final cart</button>
                        {grocery.isPurchased ? "added to update cart" : "added"}
                        <button onClick={() => this.handleRemove(index)}>Remove item</button>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default Displaylist


// let gCopy = this.state.groceryList.slice()
//       gCopy.splice(index, 1)
//       this.setState({
//         groceryList: gCopy,
//       })
