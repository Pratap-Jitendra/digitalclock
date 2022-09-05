import './App.css';
import React, { useState } from 'react'


function App() {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const [Time, setTime] = useState(time);
    const updatetime = ()=>{
      
      setTime(time);
    }
    setInterval(updatetime, 1000);
    
        
    
  return (
   <div>
    
    <h1>My Digital Clock</h1>
      
      <h2>{Time}</h2>
<p className="author">By jitendra</p>
      </div>
  )
}

export default App;
