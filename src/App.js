// import logo from './logo.svg';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Footer from './Components/Footer';


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const setAlertMessage = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1b1e2e";
      setAlert("Dark mode has been enable", "success");
      setAlertMessage("Dark mode is enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setAlert("Dark mode has been disable", "success");
      setAlertMessage("Dark mode is disabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    <Router>
      <Navbar title="Word Converter" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About  toggleMode={toggleMode} mode={mode}/>}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} setAlertMessage={setAlertMessage} />}>
            </Route>
          </Routes>
      </div>
      {/* <Footer mode={mode} toggleMode={toggleMode}/> */}
      </Router>
    </>
  );
}

export default App;
