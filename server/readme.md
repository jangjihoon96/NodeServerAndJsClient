# ES6 기준 Express 서버 초기 설정하기

---

### 1. express 폴더 생성

원하는 express 폴더명으로 생성

### 2. package.json을 생성

```cmd
npm init -y
```

### 3. express 프로젝트 구조

```
express_project
 ㄴsrc                   // 주요 기능을 하는 JavaScript 파일들을 모아두는 폴더. 변환을 쉽게 진행하기 위해서 모아둘 것.
   ㄴroutes              // 라우터들이 있는 폴더.
     ㄴindex.js          // 진입점 라우터.
   ㄴapp.js              // 프로젝트의 시작점이 되는 파일.
 ㄴpublic                // 클라이언트에서 접근 할 수 있는 폴더.
   ㄴimages
   ㄴjs
   ㄴstyles
 ㄴmodels                // DB에 관한 스키마와 DB연결 코드가 있는 폴더.
 ㄴviews                 // 탬플릿들이 있는 폴더.
 ㄴpackage.json          // 프로젝트의 이름, 버전 및 사용된 모듈 등을 담고있는 파일.
 ㄴ.env                  // 환경변수들을 넣어두는 파일. DB 계정 정보같은 것들을 넣어 둠.
 ㄴ.gitignore            // git에 올릴 때 제외할 파일, 폴더들을 명시해 놓는 파일.
 ㄴreadme.md             // 프로젝트의 설명 등을 적어두는 파일.
```

### 4. 필요한 모듈 설치

**서버**

```cmd
>npm i [package_name]
```

- express : 서버프레임워크
- cors : 원할한 API 통신을 위한 모듈
- cookie-parser : 쿠키 해석 미들웨어
- express-session : 세션 관리용 미들웨어
- mongoose : DB연결 모듈
- morgan : 요청에 대한 정보 기록 미들웨어
- socket.io : 웹 소켓 통신을 위한 모듈
- dotenv : 환경 변수 관리를 위한 모듈.
- pug : 탬플릿 엔진이되는 모듈.

**babel**

ES6 이상의 JavaScript에서 제공하는 import와 export를 사용하기 위해서 JS변환기인 babel을 설치.

```cmd
>npm i --save-dev @babel/cli @babel/core @babel/preset-env @babel/node
```

- babel/core : babel의 주요기능을 담고있는 모듈.
- babel/cli : 명령프롬프트 창에서 babel을 사용할 수 있게 해주는 모듈.
- babel/preset-env : 대상으로하는 브라우저에 알맞는 최신 자바스크립트로 변환할 수 있게 해주는 설정 모듈.
- babel/node : babel/cli에서 독립된 모듈로, Node.js의 cli처럼 동작하나 presets와 plugins를 바탕으로 컴파일링한 후에 동작하는 기능이 추가되어있음.

### 5. 초기 서버 설정을 합니다.

- app.js : 서버 설정.
- views : express 서버 실행시 진입할 화면들. pug 템플릿 엔진을 사용하기 때문에 그에 맞는 문법으로 작성.
- routes : express 서버로 접속시 해당 주소에 맞는 탬플릿을 전달해줄 라우터.

### 6. babel 설정

.babelrc 파일을 생성하고 , package.json을 수정하기.

- .babelrc : 바벨 설정파일로, preset을 env로 해준다.

```cmd
{
  "presets": ["@babel/preset-env"]
}
```

- package.json : 바벨을 통해서 실행하도록 scripts부분을 수정하기.

```cmd
{
  ...
   "scripts": {
    "build": "babel src -d dist",
    "start": "npm run build && node dist/app.js",
    "start:dev": "nodemon --exec babel-node src/app.js"
  },
  ...
}
```
