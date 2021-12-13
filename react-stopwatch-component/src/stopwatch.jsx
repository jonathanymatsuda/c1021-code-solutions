import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      seconds: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  timer() {
    this.timerID = setInterval(() => {
      this.setState({
        isPlaying: true,
        seconds: this.state.seconds + 1
      });
    }, 1000);
  }

  pause() {
    this.setState({ isPlaying: false });
    clearInterval(this.timerID);
  }

  handleClick() {
    const clicked = this.state.isPlaying;
    if (!clicked) {
      this.timer();
    } else if (clicked) {
      this.pause();
    }
  }

  reset() {
    const clicked = this.state.isPlaying;
    if (!clicked) {
      this.setState({ seconds: 0 });
    }
  }

  render() {
    const iClass = this.state.isPlaying ? 'fas fa-pause fa-2x' : 'fas fa-play fa-2x';
    return (
      <div>
        <div onClick={this.reset} id="timer">
          <p className="counter">{this.state.seconds}</p>
        </div>
        <div id="controls">
          <i onClick={this.handleClick} className={iClass}></i>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
