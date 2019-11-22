import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00A1DD',
      light: '#7FB0C4',
      contrastText: 'white',
    },
    secondary: {
      main: '#006089',
      dark: '#072D40',
      contrastText: 'white',
    },
  },
  stutus: {
    danger: '#990000',
  },
});

export default theme;
