import React, { Component } from 'react'
import Circle from './Circle.jsx'
import Gameover from './Gameover.jsx'
import { circles } from './circles.js'

import './App.css'

const getrandominteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default class App extends Component {
  state = {
    circles: circles,
    score: 0,
    current: 0,
    pace: 1000,
    gameover: false,
    counter: 0,
    gameon: false
  }

  timer;

  clickhandler = (circle) => {
    if(this.state.current !== circle) {
      return this.stophandler();
    }
    this.setState({
      score: this.state.score + 10,
      counter: this.state.counter - 1
    })
  }

  randomnumber = () => {
    if (this.state.counter >= 5) {
      return this.stophandler();
    }

    let nextactive;

    do {
      nextactive = getrandominteger(1, this.state.circles.length - 1);
  } while (nextactive === this.state.current);

  this.setState({
    current: nextactive,
    speed: this.state.pace * 0.95,
    counter: this.state.counter + 1
  })

  this.timer = setTimeout(this.randomnumber, this.state.pace);
}

starthanddler = () => {
  this.randomnumber();
}

stophandler = () => {
  clearTimeout(this.timer);

  this.setState({
    gameover: !this.state.gameover
  })
}

closehandler = () => {
  this.setState({
    gameover: !this.state.gameover,
    score: 0
  })
}

  render() {
    return (

      <div className='App-header'>
          <h2>Score: {this.state.score}</h2>
          <button onClick={this.starthanddler} className='start'>Start</button>
          <button onClick={this.stophandler} className='stop'>Stop</button>

          {this.state.gameover && <Gameover close={this.closehandler} score={this.state.score} />}

          <div className='circle'>
          {this.state.circles.map(circle => <Circle key={circle} click={() => this.clickhandler(circle)}
          active={this.state.current === circle} gameon={this.state.gameon}
          />)}
          </div>

      </div>
    )
  }
}
