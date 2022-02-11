
// import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Chuke from './img/chuke.png';
import TemporaryDrawer from './TemporaryDrawer';
import './About.scss';
import Camp from './img/camp.jpg'
import { url } from 'inspector';
import Timeline from './Timeline.jsx'

const About = () => {
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
  
  return (
    // <div style={{ backgroundImage: `url(${Camp})`}} className='fixed top-0 left-0 h-screen w-full'> 
    <div className='w-11/12 h-screen'>  
      <TemporaryDrawer 
      sx={drawerButtonStyle}
      text = 'menu' 
      />
      <div className = 'flex justify-center pt-20'>

        <div className='w-2/5 mr-20'>
          <div className='flex justify-center'>
              <img src={Chuke} alt="Chuke" className='w-40'/>
          </div>
          <div className='flex justify-center'>
              ちゅけ
          </div>
        </div>

        <div className = 'w-2/5'>
          <div className = ''>
            埼玉県生まれ。法政大学　機械工学科卒業。<br/>
            大手自動車メーカーにて完成者の品質保証に携わる。<br/>
            在職中pythonを用いてデータからは読み取れないMT車のギアを推測、<br/>
            車速ごとの使用頻度分布を算出するソフトを開発。<br/>
            2022年より研修会社に社内SEとして転職。社内向けWEBアプリ開発を主業務としている。<br/>
          </div>
          <br />
          {/* <div className = ''>
            クリフトンストレングス<br />
          </div>
            <div className=''>
              <img src={Clifton} alt="Crifton" className='w-80'/>
            </div> */}
        </div>
      </div>
      <div className='flex justify-center w-full'>
        アンパーーーんち
      </div>
    </div>
  );
}



export default About;
