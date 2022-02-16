import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing'
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const mainTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#c71d5c',
    },
    background: {
      default: '#333333',
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
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
        <Routing /> 
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
