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
    ['Python','業務改善のためのGUIアプリ個人開発経験があります。selenium（スクレイピング）pandas（演算、頻度解析）gui-auto(GUI操作再現)などのライブラリを使用して開発していました。私をプログラミングの世界に導いてくれた初めての言語です。',"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"],
    ['React','個人開発の際SPAのフロントエンドに使用しています。このサイトはReact+TSで作成されておりMaterial-UIが導入されています。SPAは更新が非常に高速でユーザー体験を大幅に向上させ感動させることができる技術だと考え学習をはじめました。',"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",],
    ['Cakephp','社内システム開発においてフロントエンド、バックエンド両方の開発経験があります。主業務として経験を積んできたため即戦力として携わることができます。',"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg",],
    ['php','Cakephpを使用してきたためphpも習熟しています。フレームワーク上の表現にとどまらずphp独自の挙動（暗黙的な型変換、参照渡し等）を理解しています。',"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",],
    ['Typescript','Reactでフロントエンド開発をするときに使用しています。現在フロントエンド開発でのデファクトスタンダードになりつつあり、静的型付け言語の習得のため学習をしています。',"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",],
    ['Docker','環境構築を迅速に行うために使用しています。環境構築の工数削減、開発の現場において環境の差異によるバグの発生がなくなるなどのメリットに惹かれ学習をはじめました。',"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",],
    ['Laravel','個人開発においてReactと組み合わせてバックエンドに使用しています。現在主流のphpフレームワークであり、cakephpと同じMVCモデルであるため理解があります。',"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",],
    ['Javascript','cakephpによる開発においてフロントエンドの動的な動きを再現する際に使用しています。jQueryの使用経験もあります。',"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",],
    ['Adobe XD','モックアップ作成、アイコン作成の際に使用しています。',"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",],
  ]



  // const iconKey=Object.keys(devIcons);
  return (
    <div>
      <div className='flex justify-center text-6xl my-10'>
        Skills
      </div>
      <TemporaryDrawer 
        sx={drawerButtonStyle} 
      />
      <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 mx-32' >
      {cardsInfo.map((value,index) =>
      (
      <SkillCard title={value[0]} body={value[1]} icon={value[2]} key={index} />
      ))}
      </div>
    </div>
  );
}