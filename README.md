# My JavaScript Project

## 프로젝트 개요
이 프로젝트는 사용자가 도착지를 선택하고 확인할 수 있는 웹 애플리케이션입니다. Express.js를 사용하여 서버를 설정하고, HTML 파일을 통해 사용자 인터페이스를 제공합니다.

## 파일 구조
```
my-javascript-project
├── public
│   ├── index.html        # 메인 HTML 구조 및 도착지 선택 폼
│   └── arrival.html      # 도착지 확인 페이지
├── src
│   ├── app.js           # 애플리케이션의 진입점
│   └── routes
│       └── index.js     # 라우트 핸들러
├── package.json          # npm 구성 파일
└── README.md             # 프로젝트 문서
```

## 설치 및 실행 방법
1. 이 저장소를 클론합니다.
   ```
   git clone <repository-url>
   cd my-javascript-project
   ```

2. 필요한 패키지를 설치합니다.
   ```
   npm install
   ```

3. 서버를 시작합니다.
   ```
   npm start
   ```

4. 웹 브라우저에서 `http://localhost:5501`에 접속하여 애플리케이션을 사용합니다.

## 사용 기술
- **Node.js**: 서버 사이드 JavaScript 실행 환경
- **Express.js**: 웹 애플리케이션 프레임워크
- **HTML/CSS**: 사용자 인터페이스 구성

## 기여
기여를 원하시는 분은 이슈를 생성하거나 풀 리퀘스트를 제출해 주세요.