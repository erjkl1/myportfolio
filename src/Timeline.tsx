import React from 'react'
import { Chrono } from 'react-chrono'

const items = [{
  title: "2018/3",
  cardTitle: "大学卒業",
  cardSubtitle:"法政大学　機械工学科卒業",
  // media: {
  //   type: "IMAGE",
  //   source: {
  //     url: "https://cdn.pixabay.com/photo/2019/11/18/02/41/autumn-leaves-4633854_960_720.jpg"
  //   }
  //}
},
{
  title: "2018/4",
  cardTitle: "大手自動車メーカー",
  cardSubtitle:"大手自動車メーカーに就職。完成車の品質保証の業務に携わる。在職中pythonを独学で学び業務改善に関わるGUIアプリを4つ作成。プログラミングの楽しさに気づく。",
  // media: {
  //   type: "IMAGE",
  //   source: {
  //     url: "https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_960_720.jpg"
  //   }
  // }
},
{
  title: "2021/12",
  cardTitle: "研修会社",
  cardSubtitle:"研修会社に社内SEとして転職。webアプリケーションを作成する業務に携わっており、デザイン、フロントエンド、バックエンドの実装を担当している。",
  // media: {
  //   type: "IMAGE",
  //   source: {
  //     url: "https://cdn.pixabay.com/photo/2013/04/03/12/05/tree-99852_960_720.jpg"
  //   }
  // }
},

];
const Sample = () => {

  return (
    <div className='w-full mt-10' >
        <Chrono 
        items={items} 
        
        
        mode ='VERTICAL'
        />
    </div>
  );
}

export default Sample;