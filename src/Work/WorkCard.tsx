import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// const Tag = () => (
// <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg" />
// )
type SkillCard = {
  title:string
  body:string
  icon:string
}


export default function SkillCard({title,body,icon}:SkillCard) {

  return (
    <Card sx={{ minWidth: 200 , backgroundColor:'white',color:'black' }}>
      <CardContent sx={{borderColor:'black'}}>
        <Typography variant="h5" component="div">
        <div className='flex justify-center'>
          <img src={icon} className='w-20'/>
        </div>
        {title}
        </Typography>
        <hr className='border-gray-500 my-1'/>
        <Typography variant="body2">
          {body}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}