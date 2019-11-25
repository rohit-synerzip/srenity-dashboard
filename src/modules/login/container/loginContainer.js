import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginComponent from '../component/loginComponent';
import { login, setToken } from '../state/actions';
class LoginContainer extends React.Component {
  state = {
    useremail: '',
    password: '',
    rememberMe: 0,
  };

  static propTypes = {
    login: PropTypes.func,
    setToken: PropTypes.func,
    token: PropTypes.string,
  };

  static defaultProps = {
    login: () => {},
    setToken: () => {},
    token: null,
  };

  handleChange = e => {
    const { name, value } = e.target;
    if (name === 'rememberMe') {
      this.setState({
        [name]: e.target.checked ? 1 : 0,
      });
    }
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { useremail, password, rememberMe } = this.state;
    this.props.login({
      useremail,
      password,
      rememberMe,
    });
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

const mapStateToProps = state => {
  const { LoginState } = state;
  return {
    token: LoginState.token,
  };
};

const mapDispatchToProps = {
  login,
  setToken,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
