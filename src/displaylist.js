import React from 'react'


class Displaylist extends React.Component {

    handleClick=(index, event)=> {
        this.props.groceries[index].isPurchased = !this.props.groceries[index].isPurchased
    }


    render () {
        return (
            <div>
                <h1>Shopping Cart </h1>
                <ul className="grocery-list">
                    {this.props.groceries.map((grocery,index)=> 
                    <li key={index}>Added to list:{grocery.item}, {grocery.quantity}, {grocery.units} 
                        <button onClick={(event) => this.handleClick(index, event)}>Toggle items</button>
                        {grocery.isPurchased ? "purchased" : "added"}
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default Displaylist
