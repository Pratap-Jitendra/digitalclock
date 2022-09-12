import React from 'react';
import jitu from '../jitu1.jpg';
export default function Navbar(props) {
  return (
    <div>
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="\">{props.heading}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <img src={jitu} className="rounded float-end" alt="Pratap Jitendra" style={{width:"6%", height:"7%"}}/>
  
    <div className={`form-check form-switch text-${props.mode==='light'?'black':'white'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggel}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
  </div>
</nav>
</div>
   
    
    
  )
}
