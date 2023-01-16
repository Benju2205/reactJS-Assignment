import React from 'react'

function Button() {
    function display(){
       alert("Button clicked")
    }
  return (
    <div>
      <button onClick={display}>Click here</button>
    </div>
    
  )
}

export default Button

