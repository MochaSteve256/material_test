import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
