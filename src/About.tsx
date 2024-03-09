import React from "react";
import Chuke from "./img/chuke.png";
import TemporaryDrawer from "./TemporaryDrawer";
import Timeline from "./Timeline";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    // <div style={{ backgroundImage: `url(${Camp})`}} className='fixed top-0 left-0 h-screen w-full'>
    <div className="h-screen">
      <TemporaryDrawer />
      <div>
        <div className="flex justify-center py-4 text-6xl">About</div>
        <div className="flex justify-center">
          <div className="w-2/5 mr-20">
            <div className="flex justify-center">
              <img src={Chuke} alt="Chuke" className="w-36" />
            </div>
            <div className="flex justify-center text-xl my-2">
              <div className="ml-20 pl-5 pr-5">ちゅけ</div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/Chuke_yamaha"
              >
                <TwitterIcon sx={{ fontSize: 30 }} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://chuke-blog.com/"
              >
                <ArticleIcon sx={{ fontSize: 30 }} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/erjkl1"
              >
                <GitHubIcon sx={{ fontSize: 30 }} />
              </a>
            </div>
          </div>
          <div className="w-2/5">
            <div className="text-lg">
              埼玉県川越市生まれ。法政大学　機械工学科卒業。
              <br />
              大手自動車メーカーにて完成者の品質保証に携わる。
              <br />
              在職中pythonを用いてデータからは読み取れないMT車のギアを推測、
              <br />
              車速ごとの使用頻度分布を算出するソフトを開発。
              <br />
              2022年より研修会社に社内SEとして転職。
              <br />
              社内向けWEBアプリ開発を主業務としている。
              <br />
            </div>
            <br />
            {/* 
					  	<div className = ''>
							クリフトンストレングス<br/>
						</div>
						<div className=''>
							<img src={Clifton} alt="Crifton" className='w-80'/>
						</div> */}
          </div>
        </div>
        <div className="flex justify-center w-full text-xl">経歴</div>
      </div>
      <div className="flex justify-center w-11/12">
        <Timeline />
      </div>
    </div>
  );
};

export default About;
