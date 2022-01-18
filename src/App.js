import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }  

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils - Light Mode";
    }
  }
  
  const successMode = ()=>{
    setMode('success');
    document.body.style.backgroundColor = '#198754';
    showAlert("Green mode has been enabled",'info');
  }
  const primaryMode = ()=>{
    setMode('primary');
    document.body.style.backgroundColor = '#0d6efd';
    showAlert("Blue mode has been enabled",'success');
  }
 

  return (
   <>
    <Router>
    <Navbar title="TextUtils" aboutText="About"  mode={mode} primaryMode={primaryMode} toggleMode={toggleMode} successMode={successMode}/>
    <div className="container">
    <Alert alert={alert}/>
    <Routes>
      <Route exact path="/about" element={<About />} />    
      <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}/>
    </Routes>
    </div>
    </Router>
   </>
  );
}

export default App;
