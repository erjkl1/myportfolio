
// import { BrowserRouter, Route } from 'react-router-dom';
import './About.scss';
import Timeline from './Timeline.jsx'
import TemporaryDrawer from './TemporaryDrawer';


const History = () => {
  const drawerStyle = {
    position:'absolute',
    right: '0',
    top: '0',
    width:'50px',
    height:'50px',
    display:'flex',
    justifyContent: 'center',
    backgroundColor:'blue',
    color:'#ffffff',
    "&:hover": {
      backgroundColor:'red',
      cursor: 'default',
    }
  };

  return (
    <div>
       <TemporaryDrawer 
      sx={drawerStyle}
      text = 'menu' 
      />
        <Timeline />
    </div>
  );
}



export default History;
