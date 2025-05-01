import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "2018/3",
    cardTitle: "大学卒業",
    cardSubtitle: "法政大学　機械工学科卒業",
    // media: {
    //   type: "IMAGE",
    //   source: {
    //     url: "https://cdn.pixabay.com/photo/2019/11/18/02/41/autumn-leaves-4633854_960_720.jpg"
    //   }
    //}
  },
  {
    title: "2018/4",
    cardTitle: "本田技研工業株式会社　品質保証部門　新卒入社",
    cardSubtitle:
      "大手自動車メーカーに就職。完成車の品質保証の業務に携わる。在職中pythonを独学で学び業務改善に関わるGUIアプリを4つ作成。プログラミングの楽しさと個人での少ないリソースでも多くの人を助けることができることを発見しITの可能性が高いことに気づく。",
  },
  {
    title: "2021/12",
    cardTitle: "株式会社インソース　社内SE職　中途入社",
    cardSubtitle:
      "研修会社に社内SEとして転職。人事業務支援システムのwebアプリケーションを作成する業務に携わっており、デザイン、フロントエンド、バックエンドの実装を担当している。主に担当した機能は昨今日本で注目されている人的資本管理。経験として要件定義からテストまで一貫して行ってきた。得意な開発フェーズは詳細設計と実装。",
  },
  {
    title: "2024/6",
    cardTitle: "同業他社　PJM職　中途入社",
    cardSubtitle:
      "要件定義からテストまで一貫して行うことができるエンジニアとしてのスキルを活かし、より上流の業務に挑戦するため転職。CSMの資格を活かしながら主に研修申込管理システムのプロジェクトマネジメント・開発を担当している。",
  },
];
const Sample = () => {
  return (
    <div className="w-full mt-10">
      <Chrono
        items={items}
        mode="VERTICAL"
        theme={{
          titleColor: "white",
        }}
      />
    </div>
  );
};

export default Sample;
