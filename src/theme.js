import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2',
    },
    secondary: {
      main: '#f50057',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#1976D2',
          '&:hover': {
            backgroundColor: '#f50057',
            boxShadow: '4px 6px 8px rgba(0, 0, 0, .8)',
          },
        },
      },
    },
  },
});

export default theme;
