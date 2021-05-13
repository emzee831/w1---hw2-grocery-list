import React from 'react'
import groceries from './StartGroceries'
import AddToList from './InputList';
import DisplayList from './displaylist';
import PurchasedList from './Purchasedlist';
import Displaylist from './displaylist';

class Groceries extends React.Component{
    constructor(){
        super();
        this.state = {
        groceries: groceries,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeItem = this.removeItem.bind(this);

    }

    handleToggle=(index)=> {
        let newArry = this.state.groceries.slice()
        newArry[index].isPurchased = !newArry[index].isPurchased
        this.setState({groceries: newArry})
    }
    removeItem=(index)=> {
        let newArry1 = this.state.groceries.slice()
        newArry1.splice(index, 1)
        this.setState({groceries: newArry1})
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
        isPurchased:true
        }, ()=> console.log(this.state.groceries));
        event.preventDefault();
    }
    render() {
        return(
        <div>
            <AddToList handleSubmit={this.handleSubmit}/>
            <DisplayList groceries={this.state.groceries} handleToggle={this.handleToggle} removeItem={this.removeItem}/>
            <PurchasedList groceries={this.state.groceries}/>
        </div>
        );
    }
}
export default Groceries;