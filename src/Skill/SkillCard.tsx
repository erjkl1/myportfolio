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
    <Card sx={{ minWidth: 275 , backgroundColor:'white',color:'black' }}>
      <CardContent>
        <Typography variant="h5" component="div">
        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" /> */}
        <img src={icon} />
        {title}
        </Typography>
        <Typography variant="body2">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>


      </CardActions>
    </Card>
  );
}