import React, { Component } from 'react';
import '../App.css';
import Childone from '../component/Childone'
import Childtwo from '../component/Childtwo'
import { connect } from 'react-redux'

class Parent extends Component {

    constructor(props)
    {
        super(props);

        this.increaseValue=this.increaseValue.bind(this);
        this.decreaseValue=this.decreaseValue.bind(this);

    }


    increaseValue(){
        this.props.dispatch({ type: 'increase' });
    }

    
    decreaseValue(){
        this.props.dispatch({ type: 'decrease' });
    }

  render() {
    return (
      <div className="App">
      <br/>
      
       Parent Component

       <br/>

       <button onClick={this.increaseValue}>Increment</button>
       <button onClick={this.decreaseValue}>Decrement</button><br/>
       {this.props.value }
       <br/>

        <br/>

        

      </div>
    );
  }
}

export default connect((state)=>{

    return {...state}

})(Parent);
