import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   
    render() { 
        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props;
        return (
        <div>
            <button 
            className='btn btn-primary m-2' 
            onClick={onReset} 
            >
                Reset
            </button><br />

            {counters.map(counter => 
            <Counter 
            key={counter.id} 
            onIncrement={onIncrement} 
            onDecrement={onDecrement}
            onDelete={onDelete} 
            counter={counter}/>)}
        </div>
        );
    }
}
 
export default Counters;