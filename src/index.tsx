import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TemporaryDrawer from './TemporaryDrawer'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0874bf',
      light: '#1a81c5',
    },
    secondary: {
      main: '#c71d5c',
    },
    background: {
      default: '#0c0c0c',
      paper: 'rgba(33,33,33,0.58)',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
    },
    info: {
      main: '#157ec9',
      light: '#297db7',
    },
  },
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
      <TemporaryDrawer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
