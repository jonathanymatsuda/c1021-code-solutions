import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }

  render() {
    const clicked = this.state.clickCount;
    let button = null;
    if (clicked < 3) {
      button = <button onClick={this.handleClick}>Hot Button</button>;
    } else if (clicked < 6) {
      button = <button className='button-three' onClick={this.handleClick}>Hot Button</button>;
    } else if (clicked < 9) {
      button = <button className='button-six' onClick={this.handleClick}>Hot Button</button>;
    } else if (clicked < 12) {
      button = <button className='button-nine' onClick={this.handleClick}>Hot Button</button>;
    } else if (clicked < 15) {
      button = <button className='button-twelve' onClick={this.handleClick}>Hot Button</button>;
    } else if (clicked < 18) {
      button = <button className='button-fifteen' onClick={this.handleClick}>Hot Button</button>;
    } else {
      button = <button className='button-eighteen' onClick={this.handleClick}>Hot Button</button>;
    }
    return (
      button
    );
  }
}

export default HotButton;
