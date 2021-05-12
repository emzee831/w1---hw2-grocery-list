import React from 'react'
import groceries from './StartGroceries'
import AddToList from './InputList';
import DisplayList from './displaylist';
import PurchasedList from './Purchasedlist';

class Groceries extends React.Component{
    constructor(){
        super();
        this.state = {
        groceries: groceries,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value})
    }
    handleSubmit=(state,event)=>{
        const newItem = {
            item: state.item,
            units: state.units,
            quantity: state.quantity,
            isPurchased: state.isPurchased === "true" ? true : false
        }
        this.setState({
        groceries: [...this.state.groceries, newItem],
        item: '',
        units: '',
        quantity: 0,
        isPurchased:false
        }, ()=> console.log(this.state.groceries));
        event.preventDefault();
    }
    render() {
        return(
        <div>
            <AddToList handleSubmit={this.handleSubmit}/>
            <DisplayList groceries={this.state.groceries}/>
            <PurchasedList groceries={this.state.groceries}/>
        </div>
        );
    }
}
export default Groceries;