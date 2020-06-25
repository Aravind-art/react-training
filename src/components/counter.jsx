import React, { Component } from 'react';
class Counter extends Component {
    state = {
        value : this.props.counter.value
    };

    handleIncrement = () =>
    {
        this.setState({ value: this.state.value + 1 });
    };
     
    render() { 
        return (
            <div>
                {this.props.children}
                <span>{this.state.value}</span>
                <button onClick = {this.handleIncrement}>Increment</button>
                <button onClick = {()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        )
    }
}
 
export default Counter;