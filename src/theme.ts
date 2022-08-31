import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#a176ae',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiGrid2: {
      defaultProps: {
        disableEqualOverflow: true,
      }
    }
  }
});

export default theme;
