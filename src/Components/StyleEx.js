import React from 'react'
import './style.css'

const StyleEx = () => {
  const myStyles = {
    color: 'white',
    backgroundColor: 'red',
    padding: '20px',
  }
  return (
    <div>
      <h1 style={{ color: 'red' }}>StyleEx</h1>
      {/* //inline css */}
      {/* //to execute the js code inside the jsx we use expression {} */}
      <h1 style={myStyles}>Internal CSS</h1>
      <h1 className="danger">External CSS</h1>
    </div>
  )
}

export default StyleEx
