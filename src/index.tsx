import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './index.css';
import Home from './Home';
import About from './About';
import History from './History';
// import Skill from './Skill';
// import Work from './Work';
// import Contact from './Contact';
import NoMatch from './NoMatch';
import reportWebVitals from './reportWebVitals';
import TemporaryDrawer from './TemporaryDrawer'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Snowshoeing } from '@mui/icons-material';
import { isTemplateSpan } from 'typescript';

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

const Routing = () =>{
  type routeConfig ={
    [address : string]: JSX.Element;
  };
  const routing:routeConfig = {
     home:<Home />, 
     about: <About />, 
     history: <History />, 
    //  skill: <Skill />,
    //  work: <work />,
    //  contact: <contact />,
    }
  const componentsKey=Object.keys(routing);
  return(
    <BrowserRouter>
      <Routes>
              <Route path="/" element = {<Home />} />
              <Route path="*" element={<NoMatch />} />
              {componentsKey.map((key) =>
              (
              <Route path={'/'+key} element = {routing[key]} key={key} />
              ))}
      </Routes>
    </BrowserRouter>
  )
}


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
