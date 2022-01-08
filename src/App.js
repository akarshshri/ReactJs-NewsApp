import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from "react-router-dom";


const App = (props)=> {

  const [mode, setMode] = useState('light')
    //console.log(totalResults);
  


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#3F4544";
      console.log('Inside if')
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      console.log('Inside else')
    }
  }

    const pageSize = 9;
    return (
      <div>
        <Navbar toggleMode={toggleMode} setMode={setMode}/>
        <Routes>
          <Route path="/business" element={<News key="business" cat='business' country='in' pageSize={pageSize} toggleMode={mode} />} />
          <Route path="/entertainment" element={<News key="entertainment" cat='entertainment' country='in' pageSize={pageSize} toggleMode={mode} />} />
          <Route path="/health" element={<News key="health" cat='health' country='in' pageSize={pageSize} toggleMode={mode} />} />
          <Route path="/ReactJs-NewsApp" element={<News key="general" cat='general' country='in' pageSize={pageSize} toggleMode={mode} />} />
          <Route path="/" element={<News key="general" cat='general' country='in' pageSize={pageSize} toggleMode={mode} />} />
          <Route path="/science" element={<News key="science" cat='science' country='in' pageSize={pageSize} toggleMode={mode} />} />
          <Route path="/sports" element={<News key="sports" cat='sports' country='in' pageSize={pageSize} toggleMode={mode} />} />
          <Route path="/technology" element={<News key="technology" cat='technology' country='in' pageSize={pageSize} toggleMode={mode} />} />

        </Routes>
      </div>
    )
  
}

export default App