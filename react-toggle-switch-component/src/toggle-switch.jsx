import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    const clicked = this.state.isClicked;
    return (
      <div id='react-toggle'>
        <div className={!clicked ? 'switch switch-background' : 'switch switch-background-active'} ></div>
        <div onClick={this.handleClick} className={!clicked ? 'knob knob-position' : 'knob knob-position-active'}></div>
        <label>{!clicked ? 'OFF' : 'ON'}</label>
      </div>
    );
  }
}

export default ToggleSwitch;
