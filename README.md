# JavaScript 기초

- 반드시 스스로 개념을 정리해야 함

  - 초등학생에게 설명할 정도로 쉽게 개념 정리하면 좋음

## 1. 기초 상식

- html5 : 웹브라우저에 데이터를 보여주는 형식을 지정한 문법구조

- css3 : 데이터를 잘 보여주기 위해서 꾸며주는 용도의 문법

- js

```
1. css 제어 : 레이아웃 변경하도록 지시

2. html 제어 : 데이터의 결과를 CRUD 하도록 지시

3. Serverm DB, 데스크탑 Application 제어 : Node.js로 가능
```

## 2. js의 종류 (2가지)

#### 2-1. 웹 브라우저용 js(Web API)

- Web API는 웹 브라우저에 미리 기능이 만들어져있는 js 기능

- 주로 직접 코딩하는 것이 아니고 미리 만들어진 기능을 사용하는 것

#### 2-2. 데이터 관리용 js(ES6)

- 이전에 js는 웹브라우저 마다 모두 달랐음

- 이에 대한 불편함을 해소하기 위해서 js의 문법을 통일하였음

- 기준이 ECMAScript 라고하며 ES6가 가장 기준이 됨

## 3. 실습

#### 3-1. 웹 브라우저에서 js 실행

- `F12`실행 > `Console` 탭 선택 : console 탭은 js의 `결과, 오류`를 보는 곳

```js
console.log("안녕");
```

```js
console.clear();
```

```js
alert("안녕");
```

- 1줄 이상 작성하는 경우는 `Shift + Enter` 키를 입력하여야 함

```js
console.log("안녕하세요");
console.log("좋은 금요일입니다");
```

#### 3-2. html에서 js 실행

- indext.html 파일 생성

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
  </head>
  <body></body>
</html>
```

## 4. js 작성 위치 고민

- `<script><script/>`태그를 지원함

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
    <script>
      console.log("1. 안녕");
    </script>
  </head>
  <body>
    <script>
      console.log("2. body입니다");
    </script>
  </body>
</html>
<script>
  console.log("3. html 끝입니다");
</script>
```

#### 4-1. 3번자리 즉 html의 끝이 좋음

- 일반적으로 css와 html을 제어하는 것이 js의 목적

- `웹 브라우저가 css와 html을 모두 읽고 난 후의 자리`

#### 4-2. 1번자리 즉 head 자리는 `기능`의 정의

- 내가 즉, 개발자가 만든 많은 `기능들`을 코딩하기 좋은 자리

- 다른 개발자가 만든 많은 `기능들`을 불러와서 사용하기 좋은 자리

## 5. js도 외부에 파일로 만들어서 관리

- js 폴더 생성

- js 폴더에 `lib.js` 파일 생성

- `js/lib.js 내용`

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
    <script src="js/lib.js"></script>
  </head>
  <body>
    <script>
      console.log("2. body입니다");
    </script>
  </body>
</html>
<script>
  console.log("3. html 끝입니다");
  커피머신("아이스아메리카노");
</script>
```

# JavaScript 문법

## 1. 변수(Variables)

- 웹 브라우저에 `값 보관시 사용할 공간`

#### 1-1. 필요한 항목들을 파악

##### 1-1.1. 단계 1 (필요로 한 기능에 대해서 서술 - 피그마, UI 다이어그램)

- 나는 `사용자 정보`를 입력 받아서 `DB`에 보관하고 싶음

- 사용자가 로그인을 하고 나면 사용자 정보를 화면에 출력하고 싶음

##### 1-1.2. 단계 2 (어떤 정보를 보관할지 결정 - 요구사항명세서)

```
이름, 주민번호, 전화번호, 주소(우편번호, 상세주소), 이메일, 아이디, 비밀번호, 동의여부
```

##### 1-1.3. 단계 3 (각각의 정보를 보관할 공간을 마련)

```js
let 이름 : 글자 20자 제한
let 주민번호 : 글자 13자 제한
let 전화번호 : 글자 11자 제한
let 우편번호 : 글자 5자 제한
let 상세주소 : 글자 50자 제한
let 이메일 : 글자 20자 제한
let 아이디 : 글자 16자 제한
let 비밀번호 : 글자 16자 제한
let 동의체크 : 참/거짓 숫자 1자 제한
```

#### 1-2. 각 항목에 대해 웹 브라우저에서 임시로 보관

##### 1-2.1 단계 1

- 웹 브라우저 메모리 `빈 공간` 요청

```js
var
let
const
```

##### 1-2.2. `var`라고 작성을 하면 `변수`로 인정

- `hoisting`으로 오류가 발생할 소지가 높음

  - 미리 만들지 않고 사용해도 실행이 됨

- 옛날 js 버전에서만 씀

```
무조건 공간에다가 undefined를 넣어버림
호이스팅의 대상이 됨
```

##### 1-2.3. `let`이라고 작성을 하면 `변수`로 인정

- `hoisting`의 문제를 사전에 차단

  - 미리 만들지 않고 사용하면 오류로 알려줌

- 수시로 내용이 바뀜

##### 1-2.4. `const`라고 작성을 하면 `상수`로 인정

- `hoisting`의 문제를 사전에 차단

  - 미리 만들지 않고 사용하면 오류로 알려줌

- 절대로 내용이 변하지 않음

##### 1-2.5. 실제로 var, let, const 중에 선택

- 값이 사용자마다 변할 것. 그래서 `let`을 선택

#### 1-3. 메모리 공간에 이름 짓는 법(변수 명명법) !매우 중요!

- 이름을 잘못 지으면 다른 개발자에게 혼란을 줌

  - 개발자들의 코딩 컨벤션이 있음

- 변수의 철자는 `명사+명사 영어`로 표기

- 숫자, 공백, `_`와 `$`를 제외한 특수기호는 사용 불가

##### 1-3.1. 카멜 표기법 (Camel Case)

- 반드시 소문자로 시작하고 새로운 명사는 대문자로 시작

- 개발자들이 변수로 판단함

##### 1-3.2. 스네이크 표기법 (Snake Case)

- 변수를 모두 소문자로 작성하고 `_`로 연결

##### 1-3.3. 케밥 표기법 (Kebab Case)

- 이름을 모두 소문자로 작성하고 `-`로 연결

- 파일 또는 css 파일에서는 사용

  - 예 : Next.js의 파일명은 kebab이 표준

##### 1-3.4. 파스칼 표기법 (Pascal Case)

- 이름과 새로운 단어를 모두 대문자로 시작

- 개발자들이 객체 변수, 클래스 정의로 판단

##### 1-3.5. 대문자 표기법

- 모든 단어를 대문자로 표기

- 개발자들이 상수로 판단함

##### 1-3.6. 이름 적용하기

```js
let userName : 글자 20자 제한
let userNum : 글자 13자 제한
let userPhone : 글자 11자 제한
let userPost : 글자 5자 제한
let userAddress : 글자 50자 제한
let userEmail : 글자 20자 제한
let userId : 글자 16자 제한
let userPassword : 글자 16자 제한
let userAgree : 참/거짓 숫자 1자 제한
```

#### 1-4. 기본 데이터 종류 (원시데이터 : Primitive Data Type)

- number : 숫자

- string : 글자 (문자, 문자열로 구분)

- boolean : true/false (나중에 falshy 한것 알아야함)

- undefined : 값이 없음(변수 초기값으로 자동 세팅)

- null : 개발자가 값이 없다고 지정(값이 비었다고 세팅)

- symbol : 절대로 겹치지 않는 변수

##### 1-4.1 데이터 적용하기

```js
let userName = ""; // 20자 제한
let userNum = ""; // 13자 제한
let userPhone = ""; // 11자 제한
let userPost = ""; // 5자 제한
let userAddress = ""; // 50자 제한
let userEmail = ""; // 20자 제한
let userId = ""; // 16자 제한
let userPassword = ""; // 16자 제한
let userAgree = false; // 숫자 1자 제한
```

##### var, let, const 정확히 제약사항 파악하기

### 1-5. 참조형 데이터 종류(reference Data Type)
