import React from 'react';
import './Home.scss';
import TemporaryDrawer from './TemporaryDrawer';

const Home = () => {

  const drawerStyle = {
    position:'absolute',
    top:0,
    width:'100%',
    height:'100%',
    zIndex:100, 
    backgroundColor:'transparent',
    "&:hover": {
      cursor: 'default',
    }
  };

  return (
   <div className='home'>
    <label className='welcome home-label'>Welcome to </label>
    <label className='portfolio home-label'>Chuke portfolio</label>
    {/* TODO動画貼り付け */}
    <TemporaryDrawer 
    sx={drawerStyle} 
    />
   </div>
  );
}



export default Home;