import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const clicked = this.state.isClicked;
    let button = null;
    if (clicked === false) {
      button = <button onClick = {this.handleClick} >Click me!</button>;
    } else {
      button = <button>Success!</button>;
    }
    return (
      button
    );
  }
}

ReactDOM.render(<CustomButton/>, document.querySelector('#root'));
