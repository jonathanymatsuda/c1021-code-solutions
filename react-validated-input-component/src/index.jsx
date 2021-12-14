import React from 'react';
import ReactDOM from 'react-dom';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.password });
  }

  validateLength() {
    const currentPassword = this.state.password;
    if (currentPassword.length > 1 && currentPassword.length < 8) {
      return 'fas fa-times';
    } else {
      return 'fas fa-times';
    }
  }

  render() {
    const validateLength = this.validateLength();
    return (
      <form>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
        <i className={`${validateLength}`}></i>
      </form>
    );
  }
}

ReactDOM.render(<ValidatedInput/>, document.querySelector('#root'));

// <form>
//   <label for="password">Password</label>
//   <input type="password" name="password" id="password-input">
//   <i class="fas fa-check"></i>
//   <i class="fas fa-times"></i>
// </form>
// <div id="error">
//   <p>A password is required</p>
//   <p>Your password is too short</p>
// </div>
