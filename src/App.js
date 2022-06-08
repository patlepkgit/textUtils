import TextForm from './Components/TextForm';
import Nav from './Components/Nav'
import './App.css';
import { useState } from 'react';
import { Alert } from './Components/Alert';
import { About } from './Components/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(4 45 86)';
      showAlert("Dark mode is enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success")
    }
  }
  return (
    <BrowserRouter>
    <div className="App">
      <Nav title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>} />
        <Route exact path="/about" element={<About />} />   
      </Routes>
      
    </div>
    </BrowserRouter>

  );
}

export default App;
