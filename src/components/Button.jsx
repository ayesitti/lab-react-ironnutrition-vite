import React from 'react'

function Button() {
  return (
    <button onClick={props.onClick}
    style={{background: "green"}}>
    </button>
  )
}

export default Button