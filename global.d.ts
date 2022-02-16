declare namespace NodeJS {
  // 環境変数名の定義
  interface ProcessEnv {
    /** 現在の Node.js 実行環境 */
    readonly NODE_ENV: 'development' | 'production' | 'test';

    /** GitHub アクセストークン */
    readonly MYAPP_GITHUB_TOKEN: string;

    readonly REACT_APP_USER_ID: string;
    readonly REACT_APP_SERVICE_ID: string;
    readonly REACT_APP_TEMPLATE_ID: string;

  }
}