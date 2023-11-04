// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#1b1e2e";
    }else{
      setMode("light");
      document.body.style.backgroundColor = "#d3d7e8";
    }
  }
  
  return (
    <>
    <Navbar title = "Word Converter" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Word Converter" mode={mode}/>
    </div>
    {/* <About/> */}
    </>
  );
}

export default App;
