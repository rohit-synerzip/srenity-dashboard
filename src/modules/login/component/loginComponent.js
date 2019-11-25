import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginComponent = props => {
  const classes = useStyles();
  const { handleChange, useremail, password, rememberMe, handleSubmit } = props;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="useremail"
            label="Email"
            name="useremail"
            autoFocus
            onChange={handleChange}
            value={useremail}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
            value={password}
          />

          <FormControlLabel
            control={
              <Checkbox
                name={rememberMe}
                onClick={handleChange}
                value={Boolean(rememberMe)}
                color="primary"
              />
            }
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Login
          </Button>

          <Grid container>
            <Grid item xs align="center">
              Forgot{' '}
              <Link href="#" variant="body2">
                password?
              </Link>
            </Grid>
            <br />
            <br />

            <Grid item>
              <Typography variant="caption">
                Don't have an account? Contact your Administrator or
              </Typography>

              <Link href="#" variant="caption">
                {' Set Up a New Acoount'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

LoginComponent.propTypes = {
  useremail: PropTypes.string,
  password: PropTypes.string,
  rememberMe: PropTypes.number,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

LoginComponent.defaultProps = {
  useremail: '',
  password: '',
  rememberMe: 0,
  handleChange: () => {},
  handleSubmit: () => {},
};

export default LoginComponent;
