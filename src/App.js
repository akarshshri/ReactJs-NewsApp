import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
        mode: 'light'
  
    }
    //console.log(this.state.totalResults);
  }
  

   toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({mode: 'dark'});
      document.body.style.backgroundColor = "#3F4544";
      console.log('Inside if')
    } else {
      this.setState({mode: 'light'});
      document.body.style.backgroundColor = "white";
      console.log('Inside else')
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <News cat='general' country='in' pageSize = '18' toggleMode={this.state.mode}/>
      </div>
    )
  }
}
