
// import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import './About.scss';

const About = () => {
  
  return (
    <div>
    <button className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
      {'hagepon'}
    </button>
      <div className='left'>
        <div className = 'photo'>
          <img src="" alt="" />
          syasin
        </div>
        <div>
          history
        </div>
      </div>

      <div className = 'right'>
        <div className='name'>
          ちゅけ
        </div>
        <div>
          埼玉県生まれ。大手自動車メーカーにて完成車の品質保証の業務に携わる。<br/>
          在職中独学でpythonを用いて車両データから頻度分布を算出するGUIソフトを開発。<br/>
          2022年より研修会社に社内SEとして転職。社内向けWEBアプリ開発を主業務としている。<br/>
        </div>
        <div>
        クリフトンストレングス<br />
        ・・・
        〇〇を強みとしているので〇〇という形で価値を提供できます。
        またその証拠として〇〇があります。
        </div>
      </div>

      


  </div>
  );
}



export default About;
