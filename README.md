# このリポジトリについて

これはちゅけ(twitter:https://twitter.com/chuke_yamaha)<br>
のポートフォリオです．<br>
ReactApp を用いて構築されています．<br>
githubPagesを用いてビルドされています.<br>
https://erjkl1.github.io/myportfolio/

## こだわった点

・使用している技術に React+Typescript,tailwind,mui を採用した<br>
・SPA で開発していること<br>
・ライブラリ・メディアを用いて動的な動きをするサイトを心がけた<br>
・問い合わせ機能を開発した

## 使用している技術

react@17.0.2<br>
typescript@4.9.5<br>
tailwindcss@npm:@tailwindcss/postcss7-compat@2.2.17<br>
@mui/material@5.12.1

## 技術選定の理由

昨今の UI,UX を最大化しつつ効率的に開発することができる<br>
フロントエンドモダン開発のうちデファクトスタンダードである技術を用いて開発していること<br>
<br>
自身の経験のある JS に近しい言語を選択して効率よく静的型付け言語を学びたかった<br>
自身のスキル向上のため習得難易度が高くても，広く活用されているかに着目し選択した

## 環境構築方法

yarn install でパッケージをインストールしたのち yarn start で起動可能<br>
動作確認環境<br>
OS:M1 Macbook Air Ventura 13.2.1<br>
shell: zsh<br>
node: v20.0.0
yarn: 1.22.19

## デプロイ方法

以下のコマンドをプロジェクト直下ディレクトリで実行しビルドする
```
yarn run build
```

.gitignoreを以下のように編集し生成されたbuildフォルダをcommitできるようにする
```
# production
# /build
```

以下のコマンドを実行しコミット，プッシュする
```
git commit -am 'Add build folder'
git push origin main
```

以下のコマンドを実行しサブツリーにpushする
```
git subtree push --prefix build/ origin gh-pages
```

https://dev-yakuza.posstree.com/react/github-pages/
デプロイについて参考にさせていただきました


