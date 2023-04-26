import React from 'react'

function Gameover(props) {
  return (
    <div className='overlay'>
            <div className="gameoverbox">
                <h1>Game Over</h1>
                <button onClick={props.close} >X</button>
            </div>
    </div>
  )
}

export default Gameover