import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green color for primary elements
    },
    secondary: {
      main: '#8BC34A', // Lighter green for secondary elements
    },
  },
  typography: {
    h6: {
      fontFamily: 'Arial, sans-serif',
      fontWeight: 700,
    },
  },
});

export default theme;
