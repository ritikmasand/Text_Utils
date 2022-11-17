
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import { useState } from 'react';
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showalert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode=()=>{
   if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#080431';
    showalert('Mode Changed to Dark','success');
   }
   else {
    setMode('light');
    document.body.style.backgroundColor='white';
    showalert('Mode Changed to Light','success');
   }
  }
  return (
  <>
   
<Navbar title="TextUtilty" mode={mode} aboutText="aboutUtility" toggleMode={toggleMode}/>
{/* <About/> */}
<Alert alert={alert}/>
<div className="container my-3">
<TextForm heading ="Enter the Text to Transform" mode={mode} showalert={showalert}/>
</div>

  
  </>
  );

}

export default App;
