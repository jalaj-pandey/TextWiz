import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";;

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode ('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success");
      // document.title = 'TextWiz - Dark Mode';
      setInterval(() => {
        // document.title = 'TextWiz is Amazing';
      }, 2000);
      setInterval(() => {
        // document.title = 'Install TextWiz Now';
      }, 1500);
    }else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextWiz - Light Mode';
    }
  }
  
  return (
    <>
    {/* <Navbar title = "TheJalajPandey" About = "About TextWiz" /> */}
    
    <Router>
      <Navbar title= "TextWiz" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Routes>   
          <Route exact path="About" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Try TextWiz - Word Counter, Character Counter, Remove Extra Spaces" mode = {mode}/>} />
        </Routes>
      </div>
   </Router>
    </>
  );
}

export default App;
