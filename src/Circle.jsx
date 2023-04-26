import React from 'react'

function Circle(props) {
  return (
    <div className={props.active ? 'circle-active' : 'circle'} onClick={props.click}>
        
    </div>
  )
}

export default Circle