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
    cardTitle: "大手自動車メーカー",
    cardSubtitle:
      "大手自動車メーカーに就職。完成車の品質保証の業務に携わる。在職中pythonを独学で学び業務改善に関わるGUIアプリを4つ作成。プログラミングの楽しさと個人での少ないリソースでも多くの人を助けることができることを発見しITの可能性が高いことに気づく。",
  },
  {
    title: "2021/12",
    cardTitle: "研修会社",
    cardSubtitle:
      "研修会社に社内SEとして転職。人事業務支援システムのwebアプリケーションを作成する業務に携わっており、デザイン、フロントエンド、バックエンドの実装を担当している。主に担当した機能は昨今日本で注目されている人的資本管理。経験として要件定義からテストまで一貫して行ってきた。得意な開発フェーズは詳細設計と実装。",
  },
  {
    title: "2022/4",
    cardTitle: "基本情報技術者試験合格",
    cardSubtitle:
      "エンジニアとしての登竜門である基本情報技術者試験に挑戦し合格。システム開発の基本的なセキュリティや概念，プロジェクト管理の手法などを体系的に学び，基礎を知った上で開発を進めることにより業務で活用することができるようになった。",
  },
  {
    title: "2022/10",
    cardTitle: "応用情報技術者試験合格",
    cardSubtitle:
      "自身のスキルを高めたい，より上流の体系的な知識を学びたいと考え挑戦し合格。業務で自身が経験したことのないマネジメント手法やより高度なセキュリティに関する知識を身につけることができ，どのようにプロジェクトを推進すれば効率的に開発ができるのかを学ぶことができた",
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
