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
      score: 0,
      time: 0,
      game: false,
    }
  }

  easylevel = () => {
    this.setState({
      circles: [
        { id: 1, },
        { id: 2, },
        { id: 3, },
      ],
      score: 0,
      time: 0,
      game: true,
    })
    // shuffle background color of circles randomly on set interval
    setInterval(() => {
      if (this.state.game === true) {
        const random = Math.floor(Math.random() * this.state.circles.length)
        const circles = this.state.circles
        circles[random].color = 'red'
        this.setState({
          circles: circles,
        })
        setTimeout(() => {
          circles[random].color = 'white'
          this.setState({
            circles: circles,
          })
        }, 2000)
      }
    }
      , 1000)
      
  }

  mediumlevel = () => {
    this.setState({
      circles: [
        { id: 1, },
        { id: 2, },
        { id: 3, },
        { id: 4, },
      ],
      score: 0,
      time: 0,
      game: true,
    })
    // shuffle background color of circles randomly on set interval
    setInterval(() => {
      if (this.state.game === true) {
        const random = Math.floor(Math.random() * this.state.circles.length)
        const circles = this.state.circles
        circles[random].color = 'red'
        this.setState({
          circles: circles,
        })
        setTimeout(() => {
          circles[random].color = 'white'
          this.setState({
            circles: circles,
          })
        }, 2000)
      }
    }
      , 1000)
  }

  hardlevel = (active, index) => {
    this.setState({
      circles: [
        { id: 1, },
        { id: 2, },
        { id: 3, },
        { id: 4, },
        { id: 5, },
      ],
      score: 0,
      time: 0,
      game: true,
    })
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

        <div>
          <button className='easy' onClick={this.easylevel} >Easy level</button>
          <button className='medium' onClick={this.mediumlevel} >Medium level</button>
          <button className='hard' onClick={this.hardlevel} >Hard level</button>
        </div>

        <div>
          <h2>Score: {this.state.score}</h2>
          <h2>Time: {this.state.time}</h2>
        </div>

      </div>
    )
  }
}

