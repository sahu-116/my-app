// import logo from './logo.svg';
import './App.css';
import Textarea from './components/Textarea';
import Navbar from './components/Navbar';
import Foooter from './components/Foooter';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#08063a';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
           
            <Route exact path="/About" element={<About mode={mode} />} /> 
            <Route exact path="/" element={<Textarea showAlert={showAlert} heading="Enter the text for analize" mode={mode} />} />
              
          </Routes>
        </div>
      </BrowserRouter>


      <Foooter />
    </>
  );
}

export default App;
