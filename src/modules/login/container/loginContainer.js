import React from 'react';
import LoginComponent from '../component/loginComponent';

class LoginContainer extends React.Component {
  state = {
    useremail: '',
    password: '',
    rememberMe: false,
  };

  handleChange = e => {
    const { name, value } = e.target;
    if (name === 'rememberMe') {
      this.setState({
        [name]: e.target.checked,
      });
    }
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { useremail, password, rememberMe } = this.state;
    return (
      <LoginComponent
        useremail={useremail}
        password={password}
        rememberMe={rememberMe}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default LoginContainer;
