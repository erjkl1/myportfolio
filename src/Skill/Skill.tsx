import React from 'react';
import TemporaryDrawer from '../TemporaryDrawer';

import Box from '@mui/material/Box';
import SkillCard from './SkillCard';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Skill() {

  const drawerButtonStyle = {
    position:'absolute',
    right: '20px',
    bottom: '20px',
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

  // const devIcons :{ [index:string]:string } = {
  //   python:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  //   typescript:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  //   php:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
  //   react:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  //   cakephp:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg",
  //   laravel:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
  //   docker:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
  // }

  const cardsInfo:string[][] =
  [
    //[title,body,icon]
    ['python','pythonだよ',"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"],
    ['typescript','',"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",],
    ['php','',"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",],
    ['react','',"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",],
    ['cakephp','',"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg",],
    ['laravel','',"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",],
    ['docker','',"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",],
  ]



  // const iconKey=Object.keys(devIcons);
  return (
    <div className='w-20'>
      <TemporaryDrawer 
        sx={drawerButtonStyle} 
      />
      {cardsInfo.map((value,index) =>
      (
      <SkillCard title={value[0]} body={value[1]} icon={value[2]} key={index} />
      ))}

    
    </div>
  );
}