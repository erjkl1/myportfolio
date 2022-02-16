import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import {SxProps} from "@mui/system";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import ComputerIcon from '@mui/icons-material/Computer';
import AppsIcon from '@mui/icons-material/Apps';
import HelpIcon from '@mui/icons-material/Help';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000',
    },
  },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type DrawerButton = {
  sx?:object
  text?:string
}

export default function TemporaryDrawer({ sx={} , text='' }:DrawerButton) :JSX.Element{

  const [state, setState] = React.useState({left: false,});

  type drawerList ={
    [address : string]: JSX.Element;
  };

  const drawerList:drawerList = {
    Home:<HomeIcon />,
    About:<AccountCircleIcon />,
    History:<HistoryIcon />,
    Skill:<ComputerIcon />,
    Work:<AppsIcon />,
    Contact:<HelpIcon />,
  };

  const drawerKey=Object.keys(drawerList);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width:110 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        {drawerKey.map((key) => 
        (
          <ListItem sx={{px:1, py:1}} key={key} button component={Link} to = {'/'+key} >
              <ListItemIcon sx={{minWidth:0.35}}>
              {drawerList[key]}
              </ListItemIcon>
              <ListItemText sx={{width:0.1, mr:1}} primary={key} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>   
      {(['left'] as const).map((anchor, index) => (
        <React.Fragment key = {index}>
          <ThemeProvider theme={darkTheme}>
          <Button 
            sx={sx} 
            onClick={toggleDrawer(anchor, true)}>
            {text}
            </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
          </ThemeProvider>
        </React.Fragment>
      ))}
    </div>
  );
}