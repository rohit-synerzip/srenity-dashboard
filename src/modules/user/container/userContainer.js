import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUserName, setUserName } from '../state/actions';
import { UserComponent } from '../component/userComponent';

import '../styles.scss';

class User extends React.Component {
  static propTypes = {
    getUserName: PropTypes.func,
    name: PropTypes.string,
    setUserName: PropTypes.func,
  };

  static defaultProps = {
    getUserName: () => {},
    name: '',
    setUserName: () => {},
  };

  state = {
    userName: '',
  };

  componentDidMount() {
    this.props.getUserName();
  }

  handleNameChange = e => {
    this.setState({
      userName: e.target.value,
    });
  };

  updateUserName = () => {
    this.props.setUserName(this.state.userName);
  };

  render() {
    const { name, setUserName } = this.props;
    const { userName } = this.state;

    return (
      <UserComponent
        name={name}
        setUserName={setUserName}
        handleNameChange={this.handleNameChange}
        updateUserName={this.updateUserName}
        userName={userName}
      />
    );
  }
}

const mapStateToProps = state => {
  const { UserState } = state;
  return {
    name: UserState.user.name,
  };
};

const mapDispatchToProps = {
  getUserName,
  setUserName,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
