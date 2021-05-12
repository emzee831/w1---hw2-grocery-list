import React from 'react'

class Groceries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {item: 'kale', units: '1lb', quantity: 2, isPurchased: true},
                {item: 'Chicken', units: '3lb', quantity: 1, isPurchased: true},
                {item: 'tomatoes', units: '1lb', quantity: 5, isPurchased: true},
            ],
        };        
    
    }    
        render() {
            return (    
                <div className="grocerylist">
                    <div className="list1">
                        <ul>{this.state.list.map((l, idx, arr) => (
                            <li key={l}>{l.item +  ' ' + l.units + ' ,Quantity Bought ' + l.quantity}</li>
                        ))}</ul>
                    </div>
                </div>
            );
        }
}


export default Groceries
