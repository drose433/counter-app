import React, { Component } from 'react';


export default class Counter extends Component {
    render() { 
        return (
        <React.Fragment>
             <div className="row">
    <div className="col-sm-1">
      <span 
            className={this.getBadgeClasses()}
            >
                {this.formatCount()}
            </span>
    </div>
    <div className="col-sm-4">
      <button 
            onClick={() => this.props.onIncrement(this.props.counter)} 
            className='btn btn-secondary btn-sm'
            >+
            </button>

            <button 
            className='btn btn-secondary btn-sm m-2' 
            onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={this.handleDisable()}
            > - 
            </button>

            <button 
            className='btn btn-danger btn-sm m-2' onClick={() => this.props.onDelete(this.props.counter.id)}
            >
                Delete
            </button>
    </div>
  </div>

        </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    handleDisable(){
        const {value} = this.props.counter;
        return value ===0 ? true : false;
    };

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero': value;
    }
}
 