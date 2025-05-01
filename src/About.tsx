import React, { useState } from "react";
import Chuke from "./img/chuke.png";
import TemporaryDrawer from "./TemporaryDrawer";
import Timeline from "./Timeline";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";
import Clifton from "./img/clifton.png";
import Enfj from "./img/enfj.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image: string) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

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
              大手自動車メーカーにて完成車の品質保証に携わる。
              <br />
              在職中pythonを用いてデータからは読み取れないMT車のギアを推測、
              <br />
              車速ごとの使用頻度分布を算出するアプリをフルスクラッチで開発。
              <br />
              2022年より研修会社に社内SEとして転職。
              <br />
              2024年に同業他社にPJMとして転職。
              <br />
              社内向けWEBアプリ開発を主業務としている。
            </div>
            <br />
          </div>
        </div>
        <div className="flex justify-center w-full text-xl">
          自己分析/保有資格
        </div>
        <div className="flex justify-center">
          <div className="w-1/5 mr-10">
            <p className="text-lg">クリフトンストレングス(2022年)</p>
            <img
              src={Clifton}
              alt="Crifton"
              className="w-80"
              onClick={() => openModal(Clifton)}
            />
          </div>
          <div className="w-1/5 mr-10">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.16personalities.com/ja/%E7%B5%90%E6%9E%9C/enfj-a/x/cs74hee1v"
            >
              <p className="text-lg">
                16personalities(2024年)
                <OpenInNewIcon sx={{ fontSize: 15 }} />
              </p>
              <img src={Enfj} alt="enfj" className="w-80" />
            </a>
          </div>
          <div className="w-1/5">
            <p className="text-lg">保有資格</p>
            <ul className="list-disc ml-5">
              <li>基本情報技術者試験合格</li>
              <li>応用情報技術者試験合格</li>
              <li>情報処理安全確保支援士試験合格</li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.credly.com/badges/7d040ca5-576f-4a81-a81f-874da28da467/public_url"
                >
                  AWS-SAA
                  <OpenInNewIcon sx={{ fontSize: 15 }} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://bcert.me/shhqjmaup"
                >
                  認定スクラムマスター（CSM）
                  <OpenInNewIcon sx={{ fontSize: 15 }} />
                </a>
              </li>
              <li>DBスペシャリスト試験合格</li>
              <li>FP3級</li>
              <li>日商簿記検定2級</li>
              <li>ガソリン自動車整備士3級</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center w-full text-xl">経歴</div>
      </div>
      <div className="flex justify-center w-11/12">
        <Timeline />
      </div>
      {/* モーダル */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal} // 背景クリックで閉じる
        >
          <div className="relative">
            <img
              src={modalImage}
              alt="Modal"
              className="max-w-full max-h-full"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
