// import logo from './logo.svg';
// import './App.css';
   import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from './components/Alert';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
// let name ="lokesh"

 function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert]=useState(null);
  const [customColor,setColor]=useState('')
  // const valueColor=document.getElementsByClassName("color-change-input mx-3");
  const changeColor=()=>
  {
    if(customColor.trim()!=='')
    {
      document.body.style.backgroundColor=customColor;
      showAlert(`color changed to ${customColor}`,"success")
    }
    else
    {
      showAlert('please enter valid color in input')
    }
  }
  // const changeColor=document.

  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
  }
  const toggleMode= ()=>
    {
      if(mode==='light')
      {
        setMode('dark');
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
        showAlert("Enabled to dark mode","Success")
      }
      else
      {
        setMode('light');
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        showAlert("Enabled to light mode","Success")
      }
    }
  return (
    <Router>

    
      <Navbar title="TextAnalyzer" aboutText="About us" mode={mode} toggleMode={toggleMode} setCustomColor={setColor} changeColor={changeColor} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Textform showAlert={showAlert} heading="Enter text to analyze"  /> */}
      {/* <About/> */}
      </div>
      
      {/* <Navbar /> */ }
    {/* </> */}

    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/" element={<Textform showAlert={showAlert} heading="Enter text to analyze"  />} />
      </Routes>
    </Router>
    
    
  );
}

export default App;
