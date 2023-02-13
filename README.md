# React To do list

향해99 12기 리액트 숙련 주차 개인 과제
이전 입문과제에서 redux를 사용해 to do 웹 구현

## 목차

- [1. 프로젝트 소개](##1-프로젝트-소개)
- [2. 프로젝트 주소](##2-프로젝트-주소)
- [3. 기술스택](##2-기술스택)
- [4. 구현기능](##4-구현-기능)

## 1. 프로젝트 소개

- 간단한 To do list를 생성해주는 웹
- To do 를 생성, 완료, 삭제

## 2. 프로젝트 주소

...

## 3. 기술스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=purple">

## 4. 구현 기능

- 제목과 내용을 입력하고, `추가하기` 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성
- Todo의 isDone 상태가 true이면, 상태 버튼의 라벨을 `취소`, isDone이 false 이면 라벨을 `완료` 로 조건부 렌더링
- Todo의 상태가 `Working` 이면 위쪽에 위치하고, `Done`이면 아래쪽에 위치하도록 구현
- Layout의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 전체 화면의 가운데로 정렬
- 반복되는 컴포넌트를 분리
- 전역 상태 관리 라이브러리 사용 (Redux)

## 5. 분리한 components

📦src
<br />
 ┣ 📂components
 <br />
 ┃ ┣ 📜AddInput.jsx
 <br />
 ┃ ┣ 📜ToDoCards.jsx
 <br />
 ┃ ┗ 📜ToDoList.jsx
 <br />
 ┣ 📂hook
 <br />
 ┃ ┗ 📜useInput.js
 <br />
 ┣ 📂redux
 <br />
 ┃ ┣ 📂config
 <br />
 ┃ ┃ ┗ 📜configStore.js
 <br />
 ┃ ┗ 📂modules
 <br />
 ┃ ┃ ┗ 📜todos.js
 <br />
 ┣ 📜App.jsx
 <br />
 ┣ 📜index.css
 <br />
 ┗ 📜index.js
