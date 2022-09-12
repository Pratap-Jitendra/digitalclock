import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Textutlity from './components/Textutlity';
import Alert from './components/Alert';

function App() {
  
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>
  {
    setAlert({message:message, type:type});
   setTimeout(() => {
    setAlert(null)
   }, 1500);

  }
  const toggel=()=>
  {
    if(Mode==='dark')
  {
    setMode('light');
    document.body.style.backgroundColor="white";
    showAlert("Light mode enabled:", "Success");
  }
  else
  {
    setMode('dark');
    document.body.style.backgroundColor="black";
    showAlert("Dark mode enabled:", "Success");
  }
  }  
  return (
   <div>
 <Navbar heading="Home Page" mode={Mode} toggel={toggel}/>
 <Alert alert={alert}/>
 <Textutlity title="Textutlity Conversion, Entity Convert and Para-Merge" showAlert={showAlert} mode={Mode}/>
      </div>
  )
}

export default App;
