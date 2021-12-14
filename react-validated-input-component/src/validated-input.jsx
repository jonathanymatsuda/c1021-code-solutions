import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      message: '',
      icon: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  passwordValidation(event) {
    event.preventDefault();
    if (this.state.value.length === 0) {
      this.setState({
        message: 'A password is required',
        icon: 'fas fa-times'
      });
    } else if (this.state.value.length < 8) {
      this.setState({
        message: 'Your password is too short',
        icon: 'fas fa-times'
      });
    } else {
      this.setState({
        message: '',
        icon: 'fas fa-check'
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.passwordValidation}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password-box" value={this.state.value} onChange={this.handleChange}></input>
        <i className={this.state.icon}></i>
        <p>{this.state.message}</p>
      </form>
    );
  }
}

export default ValidatedInput;
