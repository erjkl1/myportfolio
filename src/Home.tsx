import React from 'react';
import TemporaryDrawer from './TemporaryDrawer';
import Video from './Video'
const Home = () => {

  const drawerStyle = {
    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    zIndex:100, 
    backgroundColor:'transparent',
    "&:hover": {
      cursor: 'default',
    }
  };

  return ( 
        <div>
        <label className='text-white text-left text-4xl z-10 block absolute top-1/4 left-1/4'>Welcome to  Chuke portfolio</label>
        <Video />
        <TemporaryDrawer 
        sx={drawerStyle} 
        />
        </div>
  );
}



export default Home;