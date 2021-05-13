import React from 'react'

class PurchasedList extends React.Component{

    state = {list : []}

    handleUpdate=() => {
        let finalList = this.props.groceries.filter((grocery, index) => grocery.isPurchased ? true:false)
        this.setState({
            list: finalList
        })   
    }


    render() {
        return (
            <div>
                <h3>Update Cart:</h3>
                <button onClick={this.handleUpdate}>UPDATE CART</button>
                {this.state.list.map((grocery,index) => <li key={index}>Purchased Item: {grocery.item}, Quantitiy: {grocery.quantity}, Units: {grocery.units} </li>)}
            </div>
        )
    }
}


export default PurchasedList;