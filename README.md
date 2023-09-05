## Example_project

직접 환경 구성과 서버 구축을 통하여 서버와 클라이언트, 웹에 대한 이해도를 높히기 위한 예제 프로젝트 입니다.
필요시 바로 사용할 수 있도록 예제 코드 위주로 넣어놓고, 필요한 설명 또한 해놓았습니다.
node 환경이며, 리액트같은 라이브러리가 아닌 순수 HTML/CSS/JS 와 함께 활용할 수 있습니다.
서버 관련된 자세한 설명은 server 폴더안 README 파일에서 확인할 수 있습니다.

### Client

- 기본적인 HTML/CSS/JS 파일 구조 + node 모듈(package.json 참고)
- default port 3000 - 수정 가능
- api/fetchDom.js - 서버 통신 관련 간단한 예제 코드

### Server

- node & express.js 를 활용하여 서버 구축
- default port 4001 - 수정 가능
- app.js - 서버에 root 파일, 각종 미들웨어 사용
- routes/index.js - 필요한 라우트(api) 모음
- dist 폴더 - node.js에서 사용한 es6문법을 babel을 활용하여 컴파일

### JS 예제 프로젝트 파일 트리 구조

```
example_project
├─ client
│  ├─ .eslintrc.js
│  ├─ assets
│  ├─ package-lock.json
│  ├─ package.json
│  └─ src
│     ├─ css
│     │  ├─ reset.css
│     │  └─ style.css
│     ├─ index.html
│     └─ js
│        ├─ api
│        │  ├─ fetchDom.js
│        │  └─ index.js
│        ├─ dom
│        │  ├─ createdom.js
│        │  ├─ index.js
│        │  └─ renderdom.js
│        └─ index.js
└─ server
   ├─ .babelrc
   ├─ .env
   ├─ dist
   │  ├─ api
   │  │  └─ index.js
   │  ├─ app.js
   │  └─ routes
   │     └─ index.js
   ├─ package-lock.json
   ├─ package.json
   ├─ readme.md
   ├─ src
   │  ├─ app.js
   │  └─ routes
   │     ├─ board
   │     │  └─ board.js
   │     └─ index.js
   └─ views
      ├─ error.pug
      ├─ index.pug
      └─ layout.pug
```
