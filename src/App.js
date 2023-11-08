// import logo from './logo.svg';
import './App.css';
import Alert from './Components/Alert';
import Blog from './Components/Blog';
import HelpUs from './Components/HelpUs';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


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
        <Navbar title="Countify" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route path="/blog" element={<Blog toggleMode={toggleMode} mode={mode} />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze" mode={mode} setAlertMessage={setAlertMessage} />}>
            </Route>
            <Route path="/helpus"   element={<HelpUs  toggleMode={toggleMode} mode={mode} />}>
            </Route>
          </Routes>
        </div>
        {/* <Footer mode={mode} toggleMode={toggleMode}/> */}
      </Router>
    </>
  );
}

export default App;
