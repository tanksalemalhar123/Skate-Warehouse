import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log("Born to Skate");
  }
  render() {
    return (
      <div className="App">
       <Header/>
      <Body/>
      </div>
    );
  }
}

export default App;
