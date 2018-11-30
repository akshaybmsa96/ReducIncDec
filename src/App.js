import React, { Component } from 'react';
import './App.css';
import Parent from './/component/Parent';
import { connect } from 'react-redux'

class App extends Component {
  render() 
  {
    return (
      <div className="App">

      <br/>

      <Parent/>

      <br/>
      <br/>
       
      </div>
    );
  }
}

export default connect((state)=>{

  return {...state}

})(App);
