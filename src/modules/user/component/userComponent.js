import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export const UserComponent = props => {
  const { name, handleNameChange, userName, updateUserName } = props;
  return (
    <React.Fragment>
      <h1>Hello {name}</h1>
      <input value={userName} onChange={handleNameChange} />
      <br />
      <br />
      <Button variant="contained" color="secondary" onClick={updateUserName}>
        Change User Name
      </Button>
    </React.Fragment>
  );
};

UserComponent.propTypes = {
  name: PropTypes.string,
  handleNameChange: PropTypes.func,
  updateUserName: PropTypes.func,
  userName: PropTypes.string,
};

UserComponent.defaultProps = {
  name: '',
  handleNameChange: () => {},
  updateUserName: () => {},
  userName: '',
};
