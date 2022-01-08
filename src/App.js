import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from "react-router-dom";


const App = (props)=> {

  const [mode, setmode] = useState('light')
    //console.log(totalResults);
  


  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = "#181818";
      //console.log('mode: '+mode + "/n setmode: " +setmode)
    } else {
      setmode('light')
      document.body.style.backgroundColor = "white";
      console.log('Inside else')
    }
    //{console.log('mode: '+mode + "/n setmode: " +setmode)}
  }

    const pageSize = 9;
    return (
      <div>
        <Navbar toggleMode={toggleMode} mode={mode}/>
        <Routes>
          <Route path="/business" element={<News key="business" cat='business' country='in' pageSize={pageSize} mode ={mode} />} />
          <Route path="/entertainment" element={<News key="entertainment" cat='entertainment' country='in' pageSize={pageSize} mode={mode} />} />
          <Route path="/health" element={<News key="health" cat='health' country='in' pageSize={pageSize} mode={mode} />} />
          <Route path="/ReactJs-NewsApp" element={<News key="general" cat='general' country='in' pageSize={pageSize} mode={mode} />} />
          <Route path="/" element={<News key="general" cat='general' country='in' pageSize={pageSize} mode={mode} />} />
          <Route path="/science" element={<News key="science" cat='science' country='in' pageSize={pageSize} mode={mode} />} />
          <Route path="/sports" element={<News key="sports" cat='sports' country='in' pageSize={pageSize} mode={mode} />} />
          <Route path="/technology" element={<News key="technology" cat='technology' country='in' pageSize={pageSize} mode={mode} />} />

        </Routes>
      </div>
    )
  
}

export default App