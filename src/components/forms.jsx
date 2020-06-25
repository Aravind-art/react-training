import React, { Component } from 'react';

class NewForm extends Component {
    state = {
        value: 'Please write an essay about your favorite DOM element.',     
        selectValue:'coconut' 
      }
    constructor(props)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    handleSelectChange(event){
        this.setState({selectValue: event.target.selectValue})
    }
    
    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return ( 
            <form onSubmit={this.handleSubmit}>
            <label>
              Essay:
              <br/>
              <textarea value={this.state.value} onChange = {this.handleChange}/>
            </label>
            <input type="submit" value="Submit" />
            <br/>
            <label>
          Pick your favorite flavor:
          <br/>
          <select value={this.state.selectValue} onChange={this.handleSelectChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <br/>
          <select multiple = {true} value = {[1,2,3,4,6]}></select>
        </label>
        <input type="submit" value="Submit" />
          </form>
         );
    }
}
 
export default NewForm;