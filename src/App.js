import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from "react-router-dom";


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
      this.setState({ mode: 'dark' });
      document.body.style.backgroundColor = "#3F4544";
      console.log('Inside if')
    } else {
      this.setState({ mode: 'light' });
      document.body.style.backgroundColor = "white";
      console.log('Inside else')
    }
  }

  render() {
    const pageSize = 15;
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/business" element={<News key="business" cat='business' country='in' pageSize={pageSize} toggleMode={this.state.mode} />} />
          <Route path="/entertainment" element={<News key="entertainment" cat='entertainment' country='in' pageSize={pageSize} toggleMode={this.state.mode} />} />
          <Route path="/" element={<News key="general" cat='general' country='in' pageSize={pageSize} toggleMode={this.state.mode} />} />
          <Route path="/health" element={<News key="health" cat='health' country='in' pageSize={pageSize} toggleMode={this.state.mode} />} />
          <Route path="/science" element={<News key="science" cat='science' country='in' pageSize={pageSize} toggleMode={this.state.mode} />} />
          <Route path="/sports" element={<News key="sports" cat='sports' country='in' pageSize={pageSize} toggleMode={this.state.mode} />} />
          <Route path="/technology" element={<News key="technology" cat='technology' country='in' pageSize={pageSize} toggleMode={this.state.mode} />} />

        </Routes>
      </div>
    )
  }
}
