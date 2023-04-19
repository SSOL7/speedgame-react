import React, { Component } from 'react'

import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      circles: [
        { id: 1, },
        { id: 2, },
        { id: 3, },
      ],
    }
  }

  speedgame = () => {
    // change the color of the circle to red after click on it
  }

  render() {
    return (
      <div className='App-header'>

        {this.state.circles.map((circle) => (
          <div onClick={this.speedgame}
            key={circle.id}
            style={{
              backgroundColor: 'white',
              width: 100,
              height: 100,
              borderRadius: '50%',
            }}>
            {circle.color}
            </div>
        ))}
        <div>

        </div>
      </div>
    )
  }
}

