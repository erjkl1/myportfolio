import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
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

const Theme = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Button variant='contained'>Hello World</Button>
    </ThemeProvider>
  );
}
export default Theme;


// export const themeOptions: ThemeOptions = {
//   palette: {
//     type: 'dark',
//     primary: {
//       main: '#0874bf',
//       light: '#1a81c5',
//     },
//     secondary: {
//       main: '#c71d5c',
//     },
//     background: {
//       default: '#0c0c0c',
//       paper: 'rgba(33,33,33,0.58)',
//     },
//     text: {
//       primary: 'rgba(255,255,255,0.87)',
//     },
//     info: {
//       main: '#157ec9',
//       light: '#297db7',
//     },
//   },
// };