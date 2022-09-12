import React from 'react'


export default function Alert(props) {
  return (
  
   <div style={{height:"40px"}}>
  
        { props.alert && <div className="alert alert-primary" role="alert">
  <strong>{props.alert.message}:</strong> {props.alert.type}
  
</div>}
</div>
    
  
  )
}
