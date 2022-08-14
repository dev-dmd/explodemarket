import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#62D38E',
      text: '#f4f4f4'
    },
    secondary: {
      main: '#F9FD26',
      text: '#1F2971'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
