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

## 2. js의 실행할 수 있는 환경 (2가지)

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

- boolean : true/false (나중에 falsy 한것 알아야함)

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

#### 1-5 var, let, const 정확히 제약사항 파악하기

- 웹 브라우저에 저장할 내용, 즉 변수가 있다면 아래를 고민

##### 1-5.1. `1순위는 const`

- 변수를 만든다면 var, let, const 중 무엇을 선택할까?

- 처음 코딩할 때엔 상수 const 사용 권장(변하지 않을 값을 작성할 때) -> 추후 코딩하다 값이 바뀌어야하는 경우에 let으로 변경

- const의 특징

  - 만들기 전에 사용할 수 없음(호이스팅 문제 해결)

  ```js
  console.log(userName); // Error
  const userName = "홍길동";
  ```

  - 동일한 이름으로 변수를 또 생성할 수 없음(변수 중복 생성 방지)

  ```js
  const userAge = 10;
  const userAge = 40; // Error
  ```

  - 값을 변경할 수 없음

  ```js
  const userCity = "대구";
  userCity = "서울"; // Error
  ```

##### 1-5.2 `2순위는 let`

- 만들기 전에 사용할 수 없음(호이스팅 문제 해결)

```js
console.log(userName); // Error
let userName = "홍길동";
```

- 동일한 이름으로 변수를 또 생성할 수 없음 (중복 에러 생성. const와 동일)

```js
let userAge = 20;
let userAge = 30; // Error
```

- 값을 나중에 변경할 수 있음(const와의 유일한 차이점)

```js
let userCity = "대구";
userCity = "서울";
```

##### 1-5.3. `var`는 사용 금지

- 호이스팅이 통과됨(추후 오류의 원인)

- 동일한 이름으로 중복 생성 가능(추후 오류의 원인)

- 값 변경 가능

- 기존 코드에서 var를 사용한 케이스가 있으면 그냥 유지

#### 1-5. 참조형 데이터 종류(reference Data Type)

- ex) interpark 사이트의 banner 영역의 데이터를 js에서 관리하려고 한다

  - banner는 링크주소, 이미지주소, 고유한 ID가 있음
    -> 하나의 배너는 변수 3개씩 가지고있음

- 총 5개의 배너가 있다면

```js
// 첫번째 배너
const bannerUrl_1 = "https://";
const bannerImg_1 = "https://";
const bannerID = "1";
// 두번째 배너
const bannerUrl_2 = "https://";
const bannerImg_2 = "https://";
const bannerID = "2";
// 세번째 배너
const bannerUrl_3 = "https://";
const bannerImg_3 = "https://";
const bannerID = "3";
// 네번째 배너
const bannerUrl_4 = "https://";
const bannerImg_4 = "https://";
const bannerID = "4";
// 다섯번째 배너
const bannerUrl_5 = "https://";
const bannerImg_5 = "https://";
const bannerID = "5";
```

##### 1-6.1. 객체

- 관련있는 기본형 데이터들을 `묶어서 하나`로 만듦

```js
// 1단계
const 객체명 = {}
// 2단계
const 객체명 = {
  Key Name 키명 : Key Value, Value 키값,
  이름 : 값,
  이름 : 값
}
const 객체명 = {
  Property 속성명 : Value 값,
  이름 : 값,
  이름 : 값
}
```

```js
// 첫번째 배너
const bannerUrl_1 = "https://";
const bannerImg_1 = "https://";
const bannerID = "1";

const banner_1 = {
  url: "https://",
  img: "https://",
  id: "1",
};

// 두번째 배너
const bannerUrl_2 = "https://";
const bannerImg_2 = "https://";
const bannerID = "2";

const banner_2 = {
  url: "https://",
  img: "https://",
  id: "2",
};
```

- 객체 변수 정보에 담겨진 속성 즉, 키명을 통한 값 사용(호출)

```js
객체명.키명;
// banner_1.url;
["객체명"].키명;
// ["banner_1"].url;
```

##### 1-6.2 배열

- 하나의 이름으로 여러개의 데이터를 묶어서 관리

```js
const userArray = [1, 2, 3, "안녕", false, null, undefined];
const bannerId = ["1", "2", "3"];
const banner = [
  { url: "https://", img: "https://", id: "1" },
  { url: "https://", img: "https://", id: "2" },
  { url: "https://", img: "https://", id: "3" },
];
```

- 배열의 요소에 값 사용(호출)

```js
배열명[인덱스번호];
banner[0];
banner[1];
```

#### 1-7. 변수 종합 예제

- 인터파크 티켓 랭킹 작업

```js
// 섹션의 타이틀
const sectionTitle = "티켓 랭킹";
console.log(sectionTitle);

// 섹션의 설명글
const sectionDesc = "~~~";
console.log(sectionDesc);

// 섹션의 카테고리
const sectionCategoryArr = ["뮤지컬", "콘서트", "스포츠"];
sectionCategory[인텍스번호];
sectionCategory[0]; // 뮤지컬
sectionCategory[1]; // 콘서트
sectionCategory[2]; // 스포츠
// 티켓의 타이틀 정보
const ticketTitleArr = [
  "팬텀 10주년 기념 공연",
  "뮤지컬 <메디슨 카운티의 다리>",
  "뮤지컬 <라이카>",
];
console.log(ticketTitleArr[0]);
console.log(ticketTitleArr[1]);
console.log(ticketTitleArr[2]);

// 티켓의 이미지 경로
const ticketImgArr = ["https://a.jpg", "https://b.jpg", "https://c.jpg"];
// 티켓의 링크 경로
const ticketUrlArr = ["https://a.html", "https://b.html", "https://c.html"];
// 티켓의 순위
const ticketRankArr = [1, 2, 3];
// 티켓의 공연 장소
const ticketPlaceArr = ["대구", "서울", "제주"];
// 티켓의 공연 일시
const ticketDayArr = ["05/07", "05/09", "05/04"];

// 위의 사항을 효율적으로 관리하기 위한 작업
const ticket_1 = {
  title: "패텀 10주년 기념 공연",
  img: "https://a.jpg",
  url: "https://a.html",
  rank: 1,
  place: "대구",
  day: "05/07",
};
console.log(ticket_1);
console.log(ticket_1.title);
console.log(ticket_1.img);
console.log(ticket_1.url);
console.log(ticket_1.rank);
console.log(ticket_1.place);
console.log(ticket_1.day);

const ticket_2 = {
  title: "뮤지컬 <메디슨 카운티의 다리>",
  img: "https://b.jpg",
  url: "https://b.html",
  rank: 2,
  place: "서울",
  day: "05/09",
};
console.log(ticket_2);
console.log(ticket_1.["title"]);
console.log(ticket_1.["img"]);
console.log(ticket_1.["url"]);
console.log(ticket_1.["rank"]);
console.log(ticket_1.["place"]);
console.log(ticket_1.["day"]);

const ticket_3 = {
  title: "뮤지컬 <라이카>",
  img: "https://c.jpg",
  url: "https://c.html",
  rank: 3,
  place: "제주",
  day: "05/04",
};
const ticketInfoArr = [ticket_1, ticket_2, ticket_3];

// 보통 아래의 형태로 데이터가 들어오는 것을 Javascript Object Notation 즉, JSON이라고 함
const ticketInfoJsonArr = [
  {
    title: "패텀 10주년 기념 공연",
    img: "https://a.jpg",
    url: "https://a.html",
    rank: 1,
    place: "대구",
    day: "05/07",
  },
  {
    title: "뮤지컬 <메디슨 카운티의 다리>",
    img: "https://b.jpg",
    url: "https://b.html",
    rank: 2,
    place: "서울",
    day: "05/09",
  },
  {
    title: "뮤지컬 <라이카>",
    img: "https://c.jpg",
    url: "https://c.html",
    rank: 3,
    place: "제주",
    day: "05/04",
  },
];

ticketInfoJsonArr[0].title;
ticketInfoJsonArr[1].title;
ticketInfoJsonArr[2].title;
```

## 2. 연산자(Operator)

- 연산을 해서 결과값을 만드는 `기호`

  - 연산자에 의한 새로운 결과값이 나오는 것 `연산식`

#### 2-1. 사칙연산(`+ - * /`)

- `+ 연산자`

```js
const numA = 0;
const numB = 1;
const result = numA + numB; // 1
```

```js
const strA = "안녕";
const strB = "hello";
const result = strA + strB; // 안녕hello
```

```js
const strA = "홍길동";
const strB = "hello";
const result = "저기" + strA + "님 반가워요!"; // 저기 홍길동 님 반가워요!
```

```js
const strA = "홍길동";
const numAge = 20;
const result = "저기" + strA + "님은 나이가" + numAge + "이군요!"; // 저기 홍길동 님은 나이가 20 이군요!\
// 숫자 + 글자는 글자로 인정함

// 아래처럼 템플릿 문법을 추천. 흔히 백틱이라고 함
const resultTemplate = `저기 ${strA}님은 나이가 ${numAge}이군요!`;
```

- 참고 예제

```html
<div class="section">
  <div class="box_wrap">
    <a href="https:~">뮤지컬 팬텀</a>
    <img src="https:~" alt="뮤지컬 팬텀 밴터이미지" />
  </div>
</div>
```

```js
const link = "https:~";
const img = "https:~";
const title = "뮤지컬 팬텀";
const alt = "뮤지컬 팬텀 배너 이미지";
const tag = `<div class="section">
  <div class="box_wrap">
    <a href="${link}">${title}</a>
    <img src="${img}" alt="${alt}" />
  </div>
</div>`;
```

```js
const numA = 5;
const numB = 8;
const resultA = `${numA} + ${numB} = ${numA + numB}`;
const resultB = `${numA} - ${numB} = ${numA + numB}`;
const resultC = `${numA} * ${numB} = ${numA + numB}`;
const resultD = `${numA} / ${numB} = ${numA + numB}`;
```

```js
const a = 1; // number
const b = "1"; // string
const result = a + b; // "11"
// number + string = string
// 1단계 : number -> string으로 암묵적 변환
// 2단계 : string + string 계산
```

- `- 연산자`

```js
const numA = 100;
const numB = 10;
const result = numA - numB; // 90
```

```js
const numA = "100"; // string
const numB = 10; // number
// string - number = number
// 1단계 : string을 number로 암묵적 변환
// 2단계 : number - number 계산
const result = numA - numB; // 90
```

```js
const numA = "ABC"; // string
const numB = 10; // number
// string - number = number
// 1단계 : string을 number로 암묵적 변환 실패
// 2단계 : string - number 계산
const result = numA - numB; // NaN (Not a Number)
```

- `*, / 연산자`

```js
const numA = 4;
const numB = 2;
const resultMulti = numA * numB; // 8
const resultDevide = numA / numB; // 2
```

#### 2-2. 나머지연산 (`%`)

- 상황 : 총 게시글 52개, 한 페이지당 5개 목록. 몇페이지가 필요하고 마지막 페이지에서 보여주어야 하는 게시글의 수는?

```js
const total = 52;
const count = 5;
const totalPage = total / count; // 10.4 (소수점 나옴)
const totalPageNumber = Math.ceil(totalPage); // 소수점 올림
const lastCount = total % count; // 소수점이 아닌 나머지가 나옴
```

#### 2-3. 복합연산자 (연산 타이핑 수 줄여줌)

```js
const numA = 5;
let result = numA + 3; // 8
// 코딩에 의한 가독성 떨어짐 그치만 PG들은 많이 사용함

result += 10; // 18
// result = result + 10;
result -= 5; // 13
// result = result - 5;
result *= 4; // 52
// result = result * 4;
result /= 2; // 26
// result = result / 2;
result %= 2; // 0
```

#### 2-4. 증감연산자 (++ --)

- 개발자는 타이핑 수를 줄이려고 노력

```js
let num = 5;
num = num + 1;
num += 1;
num++;
++num;
// 1 증가
```

```js
let num = 5;
num = num - 1;
num -= 1;
num--;
--num;
// 1 감소
```

```js
let num = 20;
let numA = num--; // 후에 배치된 후치연산이라서 numA는 20
num; // 19

let num = 20;
let numA = --num; // 전에 배치된 전치연산이라서 numA는 19
num; // 19

// 증감연산자를 변수에 담을 때에 후치 전치가 크게 작용하지만 변수에 담는 경우는 거의 없음
```

#### 2-5. 논리연산자

- 무조건 이해해야하는 부분

  - `falsy`한 값의 종류 (js에서 false라고 판단하는 값)

```js
"";
0;
undegined;
null;
NaN;
false;
```

- 최종 결과가 true인지 false인지 결과를 변수에 저장

##### 2-5.1. OR 연산자

- 2개 중 1개만 true이면 true, 나머지 false

```js
let result = true || true; // true
result = false || false; // false
result = false || true; // true
result = "" || true; // true

let userPass;
result = userPass || "비밀번호를 넣으세요";
```

##### 2-5.2. AND 연산자

- 둘다 true면 true, 아니면 false. 변수의 결과값엔 true나 false가 담겨짐

```js
let result = true && true; // true
result = false && true; // false
result = false && false; // false
```

##### 2-5.3. NOT 연산자

```js
let result = !true; // false
result = !false; // true
```

##### 2-5.4. 실습 예제

```js
let nickName = "";
let displayName = nickName || "Guest";
console.log(displayName); // "Guest"
```

```js
let title = null;
let result = title || "제목 없음";
console.log(result); // "제목 없음"
```

```js
let totalMoney = 0;
let result = totalMoney || "장바구니가 비었습니다";
console.log(result); // "장바구니가 비었습니다"
```

```js
let isLogin = true;
let result = isLogin && "환영합니다";
console.log(result); // // "환영합니다"
```

```js
let isAdmin = false;
let result = isAdmin && "관리자 메뉴 표시";
console.log(result); // false
```

```js
let config = {};
config.theme = config.theme || "light";
console.log(config); // {theme: :light"}
```

```js
let options = {
  lang: null,
  fontSize: 0;
};
let lang = option.lang || "ko";
let fontSize = option.fontSize || 20;
```

#### 2-6. 비교연산자

- 정말 중요함

```js
let resultA = "1" == 1; // true
// 데이터 값의 종류는 비교하지 않음
let resultB = "1" === 1; // false
// 데이터 값과 종류 둘 다 비교함

let resultC = 1 > 2;
let resultD = 1 < 2;
let resultE = 1 >= 2;
let resultF = 1 <= 2;
let resultG = 1 != 2;
let resultH = 1 !== 2;
```

#### 2-7. 병합연산자

- FE라면 반드시 알아야함

- 일반적으로 기본값 세팅에서 활용

- falsy가 아니라 `null, undefined`일 때만 값을 비교할 경우

- 아래에서 진행한 코드는 값이 0으로 나오길 기대함

```js
let userPoint = 0;
let dispalyPoint = userPoint || 500000;
console.log(displayPoint); // 500000
```

- `??` 연산자는 null과 undifined만 false로 인식. 나머지는 ||와 같음

```js
let userPoint = 0;
let dispalyPoint = userPoint ?? 500000;
console.log(displayPoint); // 0
```

```js
let formInput = {
  name: "".
  email: null,
  phone: undefined,
};

const name = formInput.name ?? "이름 없음";
const email = formInput.eamil ?? "이메일 없음";
const phone = formInput.phone ?? "전화번호 없음";
```

#### 2-8. 옵셔널체이닝(`?.`)

- FE라면 알아야 함

- 대상은 객체의 속성 여부에 따라 코드 진행

  - `{속성:값}`

```js
const user = {
  profile: null,
};
const age = user.profile.age; // null Error 발생 후 서비스 멈춤

const user = {
  profile: { name: "홍길동" },
};
const age = user.profile?.age;

const user = {
  profile: null,
};
const age = user.profile?.age ?? "정보가 없어서 나이 정보를 모릅니다";
```

#### 2-9. 3항 연산자

- 연산자가 3개라서 3항 연산자라고 함

- `결과 = 조건식 ? 참일 때 결과 : 거짓일 때 결과;`

- 활용 빈도가 높음

```js
const userRole = "ADMIN"; // 사용자 등급
// const url = 조건 ? 참 : 거짓;
const url = userRole === "ADMIN" ? "admin.html" : "guesㅅ.html";
```

```js
const age = 10;
const result = age < 19 ? "동의서 필요" : "성인 인증";
```

```js
const goodCount = 10;
const result = goodCount > 0 ? "재고가 있어요" : "재고가 없어요";
```

```js
const user = {
  isLonin: true,
  name: "아이유",
};
const result = user.isLogin ? `${user.name}님 반가워요` : "로그인 해주세요";
```

```js
let num = 5;
let result = num % 2 === 0 ? "짝수" : "홀수";
```

## 3. 조건문(Condition)

#### 3-1. if문

- `참/거짓`을 판단하여 코드 분기 실행함

- 모양 1.

```js
if(조건) {
  조건이 참이면 실행;
}
```

- 모양 2.

```js
if(조건) {
  조건이 참이면 실행;
}else{
  조건이 거짓이면 실행;
}
```

- 모양 3.

```js
if(조건1){
  조건1이 참이면 실행;
}else if(조건2){
  조건2이 참이면 실행;
}else if(조건3){
  조건3이 참이면 실행;
}else{
  모든 조건에 거짓이면 실행;
}
```

- 예제 : 로그인이 된 경우의 메세지 출력하기

```js
const insLogin = true;

if (isLogin === true) {
  console.log("로그인하셨네요. 반갑습니다.");
}
if (isLogin) {
  console.log("로그인하셨네요. 반갑습니다.");
}
if (isLogin) consol.log("로그인하셨네요. 반갑습니다.");

// 위의 세 조건문은 같음 isLogin의 값이 true로 이미 저장되어있기 때문에 첫번째 조건식을 굳이 안써도 됨 두번째 추천.
// 세번째처럼 중괄호를 생략할경우 if문의 명령할 내용을 하나만 작성할 수 있고 가독성이 떨어짐 그냥 중괄호 쓰는 형태로 공부하고 나머지는 알아만 두기
```

- 예제 : 로그인 된 경우의 메세지와 로그인 안 된 경우의 메세지 출력하기

```js
const isLogin = true;
if (isLogin) {
  console.log("어서오세요.");
} else {
  console.log("로그인 하세요.");
}
```

- 예제 : 나이에 따라 다른 메세지 출력하기(조건 2개 이상인 경우)

```js
const age = 19;
if (age >= 60) {
  console.log("60대이시네요.");
} else if (age >= 50) {
  console.log("50대이시네요.");
} else if (age >= 40) {
  console.log("40대이시네요.");
} else if (age >= 30) {
  console.log("30대이시네요.");
} else if (age >= 19) {
  console.log("20대이시네요.");
} else {
  console.log("청소년이시네요.");
}
// 조건문의 순서 유의하기 나기 적은 것부터 조건을 작성하면 그 나이보다 크기만 하면 무조건 첫번째 값을 출력하기때문
```

- 예제 : 사용자가 입력한 항목의 값이 `없을 경우` 메세지 보내기(필수 입력 사항)

```js
const name = "홍길동";
const pass = "1234";
const userinfoCheck = false; // 사용자 정보 활용 동의
const userEmailCheck = false; // 이메일 수신 동의

if (!name) {
  alert("이름을 입력하세요");
  return;
}
if (name === "") {
  alert("이름을 입력하세요");
  return;
}

if (pass === "") {
  alert("비밀번호를 입력하세요");
  return;
}
if (!pass) {
  alert("비밀번호를 입력하세요");
  return;
}

if (userInfoCheck) {
  alert("개인정보 동의를 체크하세요");
  return;
}
if (!userInfoCheck) {
  alert("개인정보 동의를 체크하세요");
  return;
}

if (userEmailCheck === false) {
  alert("이메일 수신 동의를 체크하세요");
  return;
}
if (!userEmailCheck) {
  alert("이메일 수신 동의를 체크하세요");
  return;
}

console.log("가입 되었습니다");

// return은
```

#### 3-2. switch문

- `여러 개의 값` 중 하나의 값이 같은지 판단 후 실행(값을 비교)

```js
switch (값){
  case 비교값1:
                실행 코드
  break;
  case 비교값2:
                실행 코드
  break;
  case 비교값3:
                실행 코드
  break;
  default:
                실행 코드
  break;
}
```

- 예제 : 엘리베이터 층

```js
const layer = 5; // 값

switch (layer) {
  case 1:
    console.log("1층 내리세요");
    break;
  case 2:
    console.log("2층 내리세요");
    break;
  case 3:
    console.log("3층 내리세요");
    break;
  case 4:
    console.log("4층 내리세요");
    break;
  case 5:
    console.log("5층 내리세요");
    break;
  default:
    console.log("내릴 층이 없습니다");
    break;
}

// if문은 단계별로 값을 비교해나가는 것 switch문은 값을 정하면 순차적인 조건문들을 다 뛰어넘고 바로 해당 값으로 도출함 그래서 범위를 정할 수 없음
```

- if와 switch 종합 예제

```js
const userRole = "ADMIN";
if (userRole === "MEMBER") {
  console.log("회원");
} else if (userRole === "ADMIN") {
  console.log("관리자");
} else {
  console.log("비회원");
}
```

```js
const userRole = "ADMIN";

switch (userRole) {
  case "MEMBER":
    console.log("회원");
    break;
  case "ADMIN":
    console.log("관리자");
    break;
  default:
    consol.log("비회원");
    break;
}
```

## 4. 반복문(Loop)

- 동일한 실행을 반복하는 문법

#### 4-1. for 구문

- 주어진 `횟수만큼` 반복 실행(`개발자가 반복횟수를 아는 경우`)

```js
for(초기값은 단 한번만 실행; 조건식의 결과가 true/false; 증감식은 조건식을 false로 만들기 위한 것){
  할일 코드 작성
}
```

```js
const total = 10; // 반복횟수
for (let i = 0; i < total; i++) {
  console.log(`현재 ${1}입니다`);
}
// 보통 횟수(조건식)은 변수로 정해서 넣음 숫자 잘 안넣음
```

- 예제 : 총 합계 값 알아내기

```js
// 장바구니 담긴 제품 가격 모음
const bucketsArr = [1000, 500, 700, 400];
// 반복 횟수
const total = buckstArr.length; //
// 반복문이 없다면
let totalPrice = bucketsArr[0] + bucketsArr[1] + bucketsArr[2] + bucketsArr[3];
// 반복문을 활용한다면
let totalPriceFor = 0;
for (let i = 0; i < 4; i++) {
  totalPriceFor = totalPriceFor + bucketsArr[i];
  // totalPriceFor += bucketsArr[i];
}
```

- 예제 : 제품의 이름과 가격 및 재고를 html 태그로 출력, 백엔드에서 제품의 목록은 json으로 주어짐

```js
// 백엔드에서 가져온 자료 json
const goodData = [
  { id: 542, name: "사과", price: 1000, stock: 10 },
  { id: 5557, name: "딸기", price: 200, stock: 0 },
  { id: 2147, name: "키위", price: 5000, stock: 5000 },
];
// 반복횟수
const total = goodData.length;
for (let i = 0; i < total; i++) {
  // 제품 1개를 뽑아서 보관한다
  const good = goodData[i];
  // html 만들기
  const tag = `<div id="${good.id}">
  <p>제품명 : ${good.name}</p>
  <p>가격 : ${good.price}</p>
  <p>재고수량 : ${good.stock || "재고가 없어요"}</p>
  </div>`;
}
```

- 예제 : 구구단

- `break`는 for 반복문을 빠져나오고 종료하는 역할

  - break는 가까운 for문을 빠져나옴 for문 안에 for문을 넣은 구조에 안쪽 for문에 break를 적으면 안쪽 for문만 빠져나오고 겉의 for문은 살아있음

- `continue`는 for 반복문에서 실행을 건너뛰는 역할

```js
const total = 9;
for (let i = 1; i <= total; i++) {
  if (i % 3 === 0) {
    continue;
  }
  if (i === 6) {
    break;
  }
  console.log(i + " 단"); // 1 단, 2 단...

  for (let j = 1; j <= total; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
```

#### 4-2. for in 구문

- for문으로 모두 가능

- for을 `객체를 대상`으로 편리하게 사용하도록 지원하는 문법

#### 4-3. for of 구문

- for문으로 모두 가능

- for을 `배열, 문자열등을 대상`으로 편리하게 사용하도록 지원하는 문법

  - `iterator`즉, `순서가 있는 데이터형`에서 사용

#### 4-4. while 구문

- `조건이 참`인 동안 무한히 반복

- 반복의 횟수를 모르는 경우

```js
while(조건){
  할 일;
  반드시 거짓으로 만들어야 함
}

let count = 0;
while (count < 5) {
  // 거짓을 만들기 위한 조건을 부여
  count = count + 1;
  console.log(count);
}
```

#### 4-5. do while 구문

- while과 다르게 일단 실행하고 조건 검사

```js
do{
  할 일;
}while(조건);

let count = 0;
do {
  // 거짓을 만들기 위한 조건을 부여
  count = count + 1;
  console.log(count);
} while (count < 5);
```

## 5. 함수(Function)

- 기능을 `{}` 묶고 `function 함수명()`을 주어서 관리

- 여러번 재활용(`호출, call`)함

- 문서 즉 설명서(JSDoc)가 잘 만들어져야 함

- 예외처리를 잘 해야 함

#### 5-1. 함수가 왜 필요하지?

- 함수 사용을 고려해봐야할 상황

  - 반복되는 1줄 이상의 코드가 있을 때

  - 코드에 대한 가독성이 필요할 때

  - 한번에 코드를 수정하여 다양한 곳에 동시에 반영되는 것을 원할 때

  - 코드의 안정성을 생각해야 할 때

  - 협업 중 기능을 만들어 재활용하여야 할 때

```js
// 아래는 사용자의 명단과 반가워요라는 메세지를 출력하는 기능
let user_1 = "홍길동";
let user_2 = "김길동";
let user_3 = "박길동";
let user_4 = "고길동";
let user_5 = "정길동";
console.log(user_1 + "님 반가워요");
console.log(user_2 + "님 반가워요");
console.log(user_3 + "님 반가워요");
console.log(user_4 + "님 반가워요");
console.log(user_5 + "님 반가워요");
```

- 기능을 구분해서 관리하고 싶다면(회원명단 및 인사 기능)

```js
function useMember (=) {
let user_1 = "홍길동";
let user_2 = "김길동";
let user_3 = "박길동";
let user_4 = "고길동";
let user_5 = "정길동";
console.log(user_1 + "님 반가워요");
console.log(user_2 + "님 반가워요");
console.log(user_3 + "님 반가워요");
console.log(user_4 + "님 반가워요");
console.log(user_5 + "님 반가워요");
}
// 함수 활용, 함수 호출, 함수 call
useMember()
```

#### 5-2. 함수 만들기

```js
함수 이름은 동사로 지음
function 함수명(){
  기능1;
  기능2;
  기능3;
}
function 함수명(재료1, 재료2, 재료3){
  재료1 처리 기능1;
  재료2 처리 기능2;
  재료3 처리 기능3;
}
```

#### 5-3. 계산기 만들기

- 단계 1.

```js
const result_1 = 5 + 4;
const result_2 = 8 + 3;
const result_3 = 7 + 2;
const result_4 = 6 + 1;
```

- 단계 2.

```js
function result_1() {
  5 + 4;
}
function result_2() {
  8 + 3;
}
function result_3() {
  7 + 2;
}
function result_4() {
  6 + 1;
}
```

- 단계 3. 재료만 다르고 하는 일은 + 기능

```js
function add(재료1, 재료2) {
  재료1 + 재료2;
}
add(5, 4);
add(8, 3);
add(7, 2);
add(6, 1);
```

- 단계 4. minus기능 만들기

```js
function minus(매개변수1, 매개변수2) {
  매개변수1 - 매개변수2;
}
minus(5, 4);
```

- 단계 5. 기능에 예외처리(오류 처리) 적용

  - 오류 : 원하지 않은 결과, Error 등

```js
function add(매개변수1, 매개변수2) {
  // 방어코드(예외처리)
  if (매개변수1 === undefined) {
    return alert("매개변수1을 입력하세요");
  }
  if (매개변수2 === undefined) {
    return alert("매개변수2를 입력하세요");
  }
  매개변수1 + 매개변수2;
}

function minus(매개변수1, 매개변수2) {
  매개변수1 - 매개변수2;
}

add(5, "100"); // 원하지 않은 결과이므로 오류
add(5, undefined); // 원하지 않은 결과이므로 오류
add(5); // 원하지 않은 결과이므로 오류
```

#### 5-4. JSDoc으로 함수 사용에 대해 안내(설명서)하기

- JSDoc 기본 이해

  - 재료, 매개변수를 parameter라고 함

```js
/**
 *  두개의 변수를 받아서 덧셈하는 기능
 * @param {number} numA - 첫번째 숫자
 * @param {number} numB - 두번째 숫자
 * @returns {number} 두 숫자의 덧셈결과
 */

function add(numA, numB) {
  if (numA === undefined) {
    return alert("첫번째 매개변수를 입력해주세요");
  }
  if (numB === undefined) {
    return alert("두번째 매개변수를 입력해주세요");
  }
  return numA + numB;
}
```

#### 5-5. JSDoc을 이용한 계산기 함수 만들기

````js
/**
 * 숫자 더하기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} 덧셈 결과
 */
function add(a, b) {
  return a + b;
}

/**
 * 숫자 빼기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 뺄셈 결과
 */
function minus(a, b) {
  return a - b;
}

/**
 * 숫자 곱하기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 곱셈 결과
 */
function multi(a, b) {
  return a * b;
}
/**
 * 숫자 나누기 기능
 * @param {number} a - number
 * @param {number} b - number
 * @returns {number} - 나눗셈 결과
 *
 * ------ 호출예 -----
 * ```javascript
 * let result = divide(5, 4)
 * ```
 *
 */
function divide(a, b) {
  if (b === 0) {
    return alert("분모는 0 이 아니어야 합니다.");
  }
  // 데이터 알아내고, 타입 비교하기
  if (typeof a !== "number") {
    return alert("분자는 숫자여야 합니다.");
  }
  if (typeof b !== "number") {
    return alert("분모는 숫자여야 합니다.");
  }

  return a / b;
}

// 덧셈 사용
const resultAdd = add(5, 4);
const resultMinus = minus(5, 4);
const resultMulti = multi(5, 4);
const resultDivide = divide(5, 0);
````

- 추가 함수

````js
/**
 * 숫자 더하기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} 덧셈 결과
 */
function add(a, b) {
  return a + b;
}

/**
 * 숫자 빼기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 뺄셈 결과
 */
function minus(a, b) {
  return a - b;
}

/**
 * 숫자 곱하기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 곱셈 결과
 */
function multi(a, b) {
  return a * b;
}
/**
 * 숫자 나누기 기능
 * @param {number} a - number
 * @param {number} b - number
 * @returns {number} - 나눗셈 결과
 *
 * ------ 호출예 -----
 * ```javascript
 * let result = divide(5, 4)
 * ```
 *
 */
function divide(a, b) {
  if (b === 0) {
    return alert("분모는 0 이 아니어야 합니다.");
  }
  // 데이터 알아내고, 타입 비교하기
  if (typeof a !== "number") {
    return alert("분자는 숫자여야 합니다.");
  }
  if (typeof b !== "number") {
    return alert("분모는 숫자여야 합니다.");
  }

  return a / b;
}

/**
 * 계산기 기능
 * 계산기 기능은 +, -, *, / 기능이 있습니다.
 * @param {string} symbol  +, -, *, / 기호 중 1개 입력
 * @param {number} a 숫자 입력
 * @param {number} b 숫자 입력
 * @returns {number} 결과는 숫자
 *
 * 사용 예) =================
 *
 * ```javascript
 * const result = calcurator("+", 5, 4);
 * ```
 */
function calcurator(symbol, a, b) {
  if (typeof symbol !== "string") {
    return alert("기호를 입력하세요.");
  }
  let result = 0;

  switch (symbol) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = minus(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    case "*":
      result = multi(a, b);
      break;
    default:
      return alert("올바른 기호를 입력해 주세요.");
  }

  return result;
}
````

#### 5-6. 다양한 함수 예제

```js
/**
 * 메시지를 콘솔에 출력하기
 * @param {string} message - 출력할 메시지
 */
function showMessage(message) {
  console.log(message);
}
showMessage("안녕");
showMessage("홍길동 반가워");
```

```js
/**
 * 배열을 받아서 요소를 출력하는 함수
 * @param {number[]} arr - 숫자모음 배열
 */
function showArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

```js
/**
 * 객체의 속성 값을 출력하는 기능
 * @param {{id:number, nicName:string, age:number}}
 */
function showUser(user) {
  console.log(user.id);
  console.log(user.nickName);
  console.log(user.age);
}
```

#### 5-7. 함수의 기본 값 설정하기

````js
/**
 * 나이를 10살 더하여서 출력하는 함수
 * @param {number} age - 현재 나이 입력
 * ```javascript
 * const result = showAge(10); // 20
 * ```
 */
function showAge(age) {
  return age + 10;
}
````

#### 5-8. 매개변수의 총 개수 자동으로 알아내기

```js
/**
 * 입력된 매개 변수 만큼 총합계산하기
 * @param {number} numbers - 숫자 값
 */
function showTotal() {
  console.log(arguments);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total = total + arguments[i];
  }
  return total;
}
const result = showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);
```

- Rest 파라메터는 전달된 매개변수에 `정확한 값만 배열`로 만듦

```js
/**
 * 입력된 매개 변수 만큼 총합계산하기
 * Rest 파라메터 이용하기
 * @param {...number} numbers - 숫자 값
 */
function showTotal(...rest) {
  console.log(rest);
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total = total + rest[i];
  }
  return total;
}

const result = showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);
```

- Rest 파라메터는 기본 매개변수 적용 후, `나머지를 배열로 추출`한다.

```js
/**
 * 입력된 매개 변수만큼 총합 계산하기
 * Rest 파라메터 이용하기
 * @param {number} numbers - 숫자값
 */
function showTotal(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total = total + rest[1];
  }
  return total;
}
const result = showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);
```

## 6. 함수 선언법 (꼭 이해)

- 1. 일반적 함수 만드는 법 (함수 선언식)

```js
function 함수명(매개변수) {
  return 결과값;
}
함수명(매개변수);
```

- 2. `변수의 값`으로 함수 만드는 법 (함수 표현식)

```js
const 변수명 = function (매개변수) {
  return 결과값;
};
변수명(매개변수);
```

- 3. 왜 `const 변수명 = function` 형태가 필요할까?

```js
function add() {
  return 1 + 2;
}
// add();

const addFun = function () {
  return 1 + 2;
};
// addFun();

const minusFun = function () {
  return 1 - 2;
};

function test(_func) {
  _func();
}

test(add); // 값이 아니라서 안됨

test(addFun);
test(minusFun);
```

- 코드 위치 살펴보기(함수 완성하고 사용하기)

```js
add(); // 호이스팅이 되므로 괜찮음
addFN(); // 호이스팅이 에러 발생함(주의)
function add() {}
const addFN = function () {};
```

## 7. 함수 추가 정리

#### 7-1. 함수를 만들 시점 (언제 함수를 만들까에 대한 안내)

##### 7-1.1 코드가 너무 긴 경우(하나의 결과를 만들기 위해서 작성시)

- 코드 가독성이 너무 떨어져서 추후 분석이 곤란할 때

- 하나의 결과를 만들기 위한 과정을 작성 중 너무 많은 코드가 작성될 때

- 여러 줄이 작성되어서 한개의 결과를 만들 때

##### 7-1.2 동일한 기능이 여러 번 사용될 때

- 2번 이상 동일한 기능을 쓸 때

- 2번 이상 동일한 기능인데 재료(매개변수)만 다를 때

##### 7-1.3 코드를 누군가에게 주어야 할 대

- 코드를 공유할 때

#### 7-2. 함수 만드는 법

- 1. `{}` 로 코드 블럭을 이용해 묶어줌

- 2. 이름을 `동사`로 지어줌(기본 : Camel Case / 생성자함수 : Pascal Case)

- 3. 이름 뒤에 `(매개변수(parameter), 매개변수(parameter))`를 작성함 (매개변수는 일반 변수명과의 구별을 위해 \_변수명으로 작성 권장)

- 4. function 키워드를 작성해 줌

- 5. `JSDoc`으로 사용 설명서 작성(작업의 효율을 위해 권장)

#### 7-3. 함수 사용법(`호출, call` 등으로 칭함)

```js
함수이름();
// 함수명을 호출했다. call했다
```

#### 7-4. 함수 샘플

- 넓이를 계산하는 기능. 2번이상 사용, 누군가에게 공유

````js
/**
 * 너비를 계산해주는 함수
 * @param {number} _width
 * @param {number} _height
 * @returns {number}
 * -- 함수 사용 예--
 * ```js
 * const result = calcRect(5,4);
 * ```
 */
function calcRect(_width, _height) {
  return _width * _height;
}
const result = calcRect(5, 4);
// 함수 호출
console.log(result);
````

#### 7-5. 함수의 추가지식

- 매개변수 갯수에는 제한이 없음

- arguments 말고 `rest 파라메터`를 쓰자

```js
function 함수명(매개변수1, 매개변수2, ...rest) {
  const params = rest; // 배열로 접근 가능
}
함수명(1, 2, 3, 4, 5);
```

- 함수를 `표현식(Expression)`으로 만드는 법

- 변수에 함수를 담는 이유는 `함수에 매개변수`에 전달하기 위함

```js
// 기본 함수 정의
function 함수명() {}

// 함수 표현식 정의
const 함수명 = function () {};

const add = function () {};
function calcFunc(_Fn) {
  add();
}
calcFunc(add);
```

- 콜백함수는 `특정한 이벤트`가 발생 시 덩달아서 실행

## 8. 화살표 함수(Arrow Function) !매우 중요!

- FE에서 함수 작성시 많이 볼 수 있는 형태

- 활용 비율이 높음 반드시 이해

#### 8-1. 화살표 함수가 필요한 이유

- 함수가 간략해짐

- 함수가 최적화됨(메모리 절약, 성능 최적화)

- this의 범위가 고정됨

- new를 사용 못함(추후 진행)

#### 8-2. 화살표 함수 작성법 (반드시 이해)

- 매개변수가 없는 경우

```js
// 기본 함수
function say(_word) {
  console.log(_word);
}
// 표현식 함수
const say = function (_word) {
  console.log(_word);
};
// 화살표함수
const sayArrow = (_word) => {
  console.log(_word);
};
// 실행 코드가 1 줄이면 {} 블럭 생략 가능
const sayArrow2 = (_word) => console.log(_word);
```

- 매개변수가 단 `1개`있을 때

```js
// 기본 함수
function say(_word) {
  console.log(_word);
}
// 표현식 함수
const say = function (_word) {
  console.log(_word);
};
// 화살표함수
const sayArrow = (_word) => {
  console.log(_word);
};
// 실행 코드가 1 줄이면 {} 블럭 생략 가능
const sayArrow2 = (_word) => console.log(_word);

// 실행 코드가 1 줄이면 {} 블럭 생략 가능
// 매개변수 () 가 생략 가능
const sayArrow3 = (_word) => console.log(_word);
```

- 매개변수가 `2개` 있을 때

```js
// 기본 함수
function say(_word, _name) {
  console.log(_word + _name);
}
// 표현식 함수
const say = function (_word, _name) {
  console.log(_word + _name);
};
// 화살표함수
const sayArrow = (_word, _name) => {
  console.log(_word + _name);
};
// 실행 코드가 1 줄이면 {} 블럭 생략 가능
const sayArrow2 = (_word, _name) => console.log(_word + _name);

// 실행 코드가 1 줄이면 {} 블럭 생략 가능
// 매개변수 2개 이상은 () 가 필수
const sayArrow3 = (_word, _name) => console.log(_word + _name);
```

## 9. 스코프(Scope)의 이해

- 변수를 활용 가능한 범위

- 제일 중요한 것은 `{}`임

#### 9-1. Scope의 종류 2가지

- 전역 스코프 : Global Scope

  - 프로그램 어디서든 마음대로 접근해서 활용

```js
//전역 변수
const appName = "JavaScript World";
{
  console.log(appName);
}
function say() {
  console.log(appName);
}
say();
```

```js
//전역자리
function say() {
  console.log("안녕");
}
//지역자리
{
  say();
}
say();
```

- 지역 스코프 : Local Scope

  - `{}` 블럭 안쪽을 지역범위라고 칭함

```js
{
  // 지역 변수
  const appName = "JavaScript World";
  console.log(appName);
}

function say() {
  console.log(appName);
}
say();
```

- 아래는 정상적으로 실행됨

- `function 키워드`는 전역 범위에 등록됨

- 개발자의 선택권한 없음

```js
// 전역 자리

// 지역 자리
{
  function say(_name) {
    console.log(_name + " 안녕");
  }
  say("홍길동");
}

say("박길동");
```

- function 은 전역에 등록되므로 예측 곤란

- 아래 코드는 협업 실패 : `function ` 은 전역에 등록해서 쓰기

- `function ` 은 지역에 코드해서 쓸 것

```js
// 전역 자리

// 개발자: 홍길동 지역 자리
{
  function say(_name) {
    console.log(_name + " Hello");
  }
  say("홍길동");
}

// 개발자 : 고길동 지역자리
{
  function say(_name) {
    console.log(_name + " 반가워");
  }
  say("고길동");
} // 고길동 function이 홍길동function을 뒤덮으면서 고길동 function이 실행됨

say("테스터");
```

- 아래를 추천

```js
// 전역 자리
function say(_word) {
  console.log("기본 실행 함수 : " + _word);
}
// 개발자: 홍길동 지역 자리
{
  const say = function (_name) {
    console.log(_name + " Hello");
  };
  say("홍길동");
}

// 개발자 : 고길동 지역자리
{
  const say = function (_name) {
    console.log(_name + " 반가워");
  };
  say("고길동");
}

say("테스터");
```

- 화살표로 고치면

```js
// 전역 자리
function say(_word) {
  console.log("기본 실행 함수 : " + _word);
}
// 개발자: 홍길동 지역 자리
{
  const say = (_name) => console.log(_name + " Hello");
  say("홍길동");
}

// 개발자 : 고길동 지역자리
{
  const say = (_name) => console.log(_name + " 반가워");
  say("고길동");
}

say("테스터");
```

## 10. this

- this가 스코프와 연결되면서 혼란스러움

#### 10-1. 전역 스코프의 this는 `Window`

```js
console.log(this); // Window{....}
```

#### 10-2. function의 this는 `Window`

```js
function say() {
  console.log(this); // Window{....}
  function hi() {
    console.log(this); // Window{....}
  }
  hi();
}
say();
```

```js
const say = function () {
  console.log(this);
};
say();
```

#### 10-3. function또는 표현식 함수는 this 사용시 위험한 코드

- 동일한 스코프를 가르쳐서 값이 변할 위험 존재

- 물어보거나 Error를 띄우지도 않고 var 변수를 만들고 window변수에 등록

```js
var brand = "nike";

function now() {
  this.brand = "adidas";
}

console.log("함수 실행전 : ", brand);

now();
console.log("함수 실행후 : ", brand);
```

#### 10-4. 객체에 속성으로 만든 함수에서의 this

- 객체에서 this는 객체 전체를 가르킴

```js
const Person = {
  name: "아이유",
  age: 20,
  sayHi: function () {
    console.log(this);
  },
};
console.log(Person.name);
Person.age;
Person.sayHi();
// function에 사용하니 this가 상황에 따라 변함
```

#### 10-5. 객체 생성자 함수로 사용 시의 this

- 생성된 객체가 this가 됨

```js
// 대문자 즉 Pascal
function Coffee() {
  console.log(this);
}

Coffee();
new Coffee();
```

#### 10-6. this 요약정리

- function에 작성한 this는 `어디서 함수를 사용했는가`에 따라 다름

```js
function say(){
  this는? // window
}
say();  // golbal영역에서 say 함수 사용
```

```js
const Person = {
  say : function(){
    this는? // 객체 Person
  }
}
Person.say(); // Person영역에서 say 함수 사용
```

```js
const Person = {
  name: "아이유",
  say: function () {
    console.log(this.name); // "아이유"
  },
};
Person.say(); // Person영역에서 say 함수 사용
```

#### 10-7. 화살표 함수의 this는?

- 화살표 함수는 `상위 스코프`를 가르킴

```js
// window영역
const say = () => {
  console.log(this); // window
};
say(); // 화살표 함수에서의 this는 현재의 상위 범위를 씀
```

```js
const Person = {
  name: "아이유",
  say: function () {
    console.log(this); // 객체가 호출
    console.log(this.name); // 객체.name

    setTimeout(function () {
      console.log(this); // window
      console.log(this.name); // window.name
    }, 3000);
  },
  sayArrow: function () {
    console.log(this); // 객체가 호출
    console.log(this.name); // 객체.name
    setTimeout(() => {
      console.log(this); // 화살표는 나의 상위 영역
      console.log(this.name); // 상위영역.name
    }, 3000);
  },
};
Person.sayArrow();
```

## 11. 생성자 함수 (목적이 `객체를 생성`하는 것)

- `new 키워드`를 붙여서 함수를 호출함

```js
function Person() {
  console.log(this);
}
new Person();
```

```js
function Person(_name) {
  this.name = _name;
  this.say = function () {
    console.log(this.name + " 안녕하세요.");
  };
  console.log(this);
  console.log(this.name);
}
const a = new Person("둘리");
a.say();
const b = new Person("또치");
b.say();
const c = new Person("마이콜");
c.say();
const d = new Person("고길동");
d.say();
```

- `prototype`을 이용하면 공통 기능을 자동으로 부여함

```js
function Person(_name) {
  this.name = _name;
  console.log(this);
  console.log(this.name);
}
Person.prototype.say = function () {
  console.log(this.name + " 안녕하세요.");
};

const a = new Person("둘리");
a.say();
const b = new Person("또치");
b.say();
const c = new Person("마이콜");
c.say();
const d = new Person("고길동");
d.say();
```

## 12. 클래스

- 목적 : `객체를 생성`하는 것

#### 12-1. 생성자 메소드(Constructor Method)

```js
class Person {
  // 클래스에서 메소드(함수) 만드는 법
  메소드명() {}
  // 객체를 생성하는 함수 : 변경불가
  // 디폴트 객체 생성자 함수
  constructor(_name, _age) {
    console.log("new하면 자동 실행");
    console.log(_name);
    this.name = _name;
    this.age = _age;
  }
}
const a = new Person("둘리", 500000);
console.log(a);
```

#### 12-2. 나의 메소드 만들기

- `메소드명() {할 일}`

```js
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  // say 라는 메소드
  say() {
    console.log(this.name);
  }
}

const a = new Person("둘리", 500000);
a.say();
```

#### 12-3. 나의 속성 만들기

- Property

- constructor : 메소드에서 만듦

```js
constructor(_name, _age){
this.name = _name;
this.age = _age;
}
```

#### 12-4. 상속 이해해보기

- 1단계

```js
//동물
class Animal {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}

// 강아지
class Dog {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}

// 새
class Bird {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}
```

- 2단계

```js
// 동물
class Animal {
  constructor(eye, nose) {
    this.eye = eye;
    this.nose = nose;
  }
  speak() {
    console.log("소리를 내요");
  }
}
const a = new Animal(2, 1);
a.speak();

console.log(a);
// 강아지
class Dog extends Animal {
  constructor() {
    super(2, 5); // new Animal();
    this.name = "강아지";
  }
  speak() {
    console.log("멍멍이라고 소리를 내요");
  }
}

const b = new Dog();
b.speak();
console.log(b);

// 새
class Bird extends Animal {
  constructor() {
    super(2, 1);
    this.name = "이쁜새";
    this.city = "대구";
  }
  speak() {
    console.log("짹짹이라고 소리를 내요");
  }
}
const c = new Bird();
c.speak();
console.log(c);
```

#### 12.5. 접근 제한자 이해하기

- 프로퍼티와 메소드를 활용하는 경우 제한 걸기

##### 12-5.1 종류

- 만약 java라면

```java
public; : 마음대로 접근 가능, 공유
private; : 사적인 즉, 클래스 내부에서만 접근 가능
protected; : 상속 받은 클래스들만 접근 가능
```

- 만약 javascript라면

```js
public; : 마음대로 접근 가능, 공유
# : 사적인 즉, 클래스 내부에서만 접근가능
protected;
```

```js
class Animal {
  // 안적으면 public (기본값)
  eye;
  // #을 적으면 private
  #nose;

  constructor(eye, nose) {
    this.eye = eye;
    this.#nose = nose;
  }
}

class Dog extends Animal {
  constructor() {
    super(2, 5);
  }
}

const a = new Dog();
console.log(a);
console.log(a.eye);
console.log(a.#nose); // private 오류
```

### 12.6. static : 클래스에 고정된 속성, 메소드

```js
class MathCalc {
  constructor() {}
  static add(a, b) {}
  static minus(a, b) {}
}
MathCalc.add(3, 4);
MathCalc.minus(3, 4);

const a = new MathCalc();
a.add(3, 4); // 에러:생성된 객체로 접근 불가
```

## 13. 콜백함수

- `call` 은 함수를 실행(호출)한다는 의미
- 일반 함수에 `매개변수로 전달된 함수`를 callback 함수라 칭한다.

### 13.1. 콜백함수 활용처

- 주로 사용자 행동에 따른 `이벤트 발생`시 실행하는 함수
- 서버 연동하여 자료를 호출하는 `이벤트 발생`시 실행하는 함수

```js
const say = function () {};
const cry = () => {};

// 매개변수로 전달된 함수 실행
function run(a) {
  a();
}

run(say);
run(cry);

// 아래 추천함.
run(function () {});
```

```js
const bt = document.querySelector(".bt");
bt.addEventListener("click", function () {});
```

## 14. 객체(Object)

#### 14-1. 객체를 가장 간단하게 만드는 법

- `객체 리터럴`로 생성

-`리터럴(literal)` : 정해진 값을 개발자가 직접 작성해 주는 것

- 숫자 리터럴, 문자열 리터럴, 배열 리터럴 등

```js
const 객체 = {
  객체키명: 키값,
  객체키명: 키값,
};
```

- 만약 객체를 1개씩 만든다면 즉, `객체리터럴로 생성한다`면 객체명은 `Camel Case`로

```js
const personInfo = {
  nickName : "아이유".
  age : 20,
  job : "singer"
};
```

#### 14-2. 여러개의 동일한 형태(구조)의 객체를 생성한다면

- `객체 생성자 함수`를 이용하는 법(`Pascal Case`)

```js
function PersonInfo(_name, _age) {
  this.nickName = _name;
  this.age = _age;
  this.job = "singer";
}
const 아이유 = new PersonInfo("아이유", 20);
const BTS = new PersonInfo("BTS", 20);
```

- `클래스`를 이용하는 법(`Pascal Case`)

```js
class PersonInfo {
  constructor(_name, _age) {
    this.nickName = _name;
    this.age = _age;
    this.job = "singer";
  }
}
const 아이유 = new PersonInfo("아이유", 20);
const BTS = new PersonInfo("BTS", 20);
```

#### 14-3. 연습예제

```js
const student_1 = {
  name: "홍길동",
  age: 10,
};
const student_2 = {
  name: "둘리",
  age: 2000,
};

function Student(_name, _age) {
  this.name = _name;
  this.age = _age;
}
const student_1 = new Student("홍길동", 10);
const student_2 = new Student("둘리", 2000);
```

#### 14-4. 객체에 값 말고 `기능 추가`하기

- 기능은 흔히 `메소드`또는 `행위(Behavior)`라고 호칭

- 객체 리터럴로 메소드 추가해보기

```js
const student_1 = {
  name: "홍길동",
  age: 20,

  // 정확하게는 Property 로 기능 정의하기
  sayName: function () {
    this.name; // 객체
  },

  // 화살표 함수는 곤란합니다.(주의하자)
  sayAge: () => {
    this.age; // window
  },
  // 가장 최신 문법으로서 정확히 메소드 임을 표현
  sayHi() {
    this.age;
  },
};
```

- `객체 생성자 함수`로 수정해보기

```js
function Student(_name, _age){
  this.name = _name;
  this.age = _age;
  this.sayName = function () {
    console.log(this.name); // 객체
  },
  // 화살표 함수 주의
  this.sayAge = () => {
    console.log(this.age); // window
  },
  // this.sayHi = () {
  //   console.log(this.age);
  // }, // method라 안됨 prototype으로 정리해주기
}
// 같은 리소스를 사용할 때는 prototype 쓰자
Student.prototype.sayHi = function(){}

const student_1 = new Student("홍길동", 20)
```

- `클래스`로 수정해보기 (필요도 떨어짐)

```js
class Student {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  sayName() {
    this.name;
  }
  // class 의 화살표는 객체
  sayAge = () => {
    this.age;
  };
  sayHi() {
    this.name;
  }
}
const student_1 = new Student("홍길동", 20);
```

- 중요1. `Vue, React에서는 기본이 객체 생성으로 시작함`

- 중요2. `Vue, React에서는 화살표 함수를 기본으로 함`

- `객체 생성자 함수, 클래스`에서의 화살표 함수의 `this는 모듈 객체`를 가르킴

## 15. 배열(Array)

- 데이터 종류와 상관없이 여러개를 `인뎅싱` 할 수 있음

#### 15-1. 배열 만드는 법

```js
// 가장 많이 함 (배열 리터럴)
cosnt 배열명 = [요소, 요소, 요소];

// 추천하지 않음
const 배열명 = new Array(3);
```

#### 15-2. 배열의 요소를 인덱스로 찾기

```js
const 배열 = [1, "안녕", false, function () {}];
배열[0];
배열[1];
배열[2];
배열[3];
```

#### 15-3. 배열의 `속성` (객체라서 존재)

```js
const배열 = [1, 3, 5];
배열.length; // 3개
```

#### 15-4.

- 일반적 데이터 형태 : `[{},{},{},{}]`

- 배열을 프로그래밍에서 많이 다루므로 `미리 함수를 제공`함 (빌트인 함수)

- 절대로 `원본을 훼손하지 말기`(불변성 유지)

#### 15-5. 배열을 다루는 함수에서 원본을 훼손하는 배열함수 (사용 금지)

- push() : 배열 `끝`에 추가

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.push("커피");
console.log(lunchArr);
// 커피 추가 (원본 훼손)
// [  "사과",  "딸기",  "과자",  "햄버거",  "커피"]
```

- pop() : `끝` 요소 제거 및 제거된 요소 반환

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.pop();
console.log(lunchArr);
// 햄버거 제거 (원본 훼손)
// [  "사과",  "딸기",  "과자"]
```

- unshift() : `앞` 요소 추가

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.unshift("커피");
console.log(lunchArr);
// 햄버거 앞자리 추가 (원본 훼손)
// ["커피", "사과",  "딸기",  "과자", "햄버거"]
```

- shift() : `앞 첫번째` 요소 제거

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.shift();
console.log(lunchArr);
// 햄버거 앞자리 제거 (원본 훼손)
// ["딸기",  "과자", "햄버거"]
```

- splice() : `원하는 인덱스` 부터 추가, 제거

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.splice(1, 2);
console.log(lunchArr);
// 인덱스로 부터 개수만큼 제거 (원본 훼손)
// ["사과", "햄버거"]
```

- sort() : 배열의 순서를 정렬하기

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.sort();
console.log(lunchArr);
// ['과자', '딸기', '사과', '햄버거']
const enArr = ["k", "o", "r", "e", "A", "j", "p", "a", "n"];

// 원본훼손
enArr.sort();
console.log(enArr);
// ['A', 'a', 'e', 'j', 'k', 'n', 'o', 'p', 'r']
const numArr = [1, 2, 12, 25, 37, 30];
// 원본훼손
numArr.sort();
console.log(numArr);
// 단순히 sort() 를 사용하면 앞 글자를 기준으로 정렬됨.
// [1, 12, 2, 25, 30, 37]

// 내림 차순으로 정렬해 보자.
// numArr.sort((a, b) => b - a);
// [37, 30, 25, 12, 2, 1]

// 올림 차순
numArr.sort((a, b) => a - b);
console.log(numArr);
// [1, 2, 12, 25, 30, 37]
```

- reverse() : `역순` 순서를 뒤집어 저장

```js
const numArr = [1, 2, 12, 25, 37, 30];
// 원본 훼손
numArr.reverse();
console.log(numArr);
// [30, 37, 25, 12, 2, 1]
```

- fill() : 요소에 값을 채운다.

```js
const numArr = [1, 2, 12, 25, 37, 30];
// 원본 훼손
// numArr.fill(0);
console.log(numArr);
// [0, 0, 0, 0, 0, 0]
// 값 1 을 채워라
// 인덱스 3번으로 부터
// 인덱스 5번 전까지
numArr.fill(1, 3, 5);
console.log(numArr);
// [1, 2, 12, 1, 1, 30]
```

- flat() : `배열을 평탄화` 사용합니다.
  : flat 을 위한 별도의 라이브러가 존재합니다.
  : react 에서 모듈을 설치해서 사용합니다.

```js
const numArr = [1, 2, 3, ["a", "b", "c"], 8, 9];
// flat(배열의 단계)
const result = numArr.flat(1);
console.log(result);
// [1, 2, 3, 'a', 'b', 'c', 8, 9]
const num2Arr = [1, 2, [3, [4, [5, 6]]], 100];
const result2 = num2Arr.flat(1);
console.log(result2);
// [1, 2, 3, Array(2), 100]
const result3 = result2.flat(1);
console.log(result3);
// [1, 2, 3, 4, Array(2), 100]
const result4 = result3.flat(1);
console.log(result4);
// [1, 2, 3, 4, 5, 6, 100]
```

#### 15-6. 배열을 다루는 함수에서 원본을 훼손하지 않고 `새로운 배열을 만들어 주는 함수`

- `데이터 불변성(immutability)` 유지하셨나요?

##### 15-6.1. map()

- `star가 1000만개` 가치가 있고, 자주활용
- 원본 배열의 요소에 동일한 함수 실행 후 새로운 배열로 생성

```js
const originArr = ["홍길동", "고길동", "김수한무"];
const copyArr = originArr.map(function (item, index, arr) {
  // console.log(`item : ${item}, index: ${index}`);
  const tag = `<div class="user-info">${item}</div>`;
  console.log(tag);
  // 리턴해야 배열이 담깁니다.
  return tag;
});
console.log(`원본 originArr : ${originArr}`);
console.log(`복제본 copyArr : ${copyArr}`);

const copyArrowArr = originArr.map((item, index) => {
  return `<a href="${index}">${item}</a>`;
});
console.log(`복제본 copyArrowArr : ${copyArrowArr}`);
```

##### 15-6.2. filter()

- 조건에 참인 것만 모아서 배열 리턴
- 자주 사용은 합니다.

```js
const memberHong = {
  age: 10,
  name: "홍길동",
  role: "GUEST",
};
const memberKim = {
  age: 18,
  name: "김수한무",
  role: "MEMBER",
};
const memberPark = {
  age: 25,
  name: "박둘리",
  role: "ADMIN",
};

const originArr = [memberHong, memberKim, memberPark];

const result = originArr.filter((item, index) => {
  // return item.role === "ADMIN";
  return item.age <= 20;
});
console.log(result);
```

##### 15-6.3. slice()

- 배열의 일부를 복사한다.

```js
const numArr = [1, "a", "b", 4];
// 시작 인덱스로 부터 도착 인덱스 미만 요소 출력
const nowArr = numArr.slice(1, 3);
console.log(numArr);
console.log(nowArr); //  ['a', 'b']
```

##### 15-6.4. concat();

- 배열을 `합쳐서` 하나의 배열을 리턴.

```js
const numArr1 = [1, "a", "b", 4];
const numArr2 = [8, 100];
const result = numArr1.concat(numArr2);
console.log(result);
// [1, 'a', 'b', 4, 8, 100]
```

##### 15-6.5. reduce();

- 배열의 요소를 탐색하면서 누적 연산함.
- 누적된 결과를 출력함.

```js
const numArr1 = [1, 2, 3, 4];
// 문법이 좀 다릅니다.
// 보통은 ===>  (item, index, arr)
// const total = numArr1.reduce(함수, 초기값)
const total = numArr1.reduce((acc, cur) => {
  console.log("acc : ", acc);
  console.log("cur : ", cur);
  return acc + cur;
}, 0);

console.log("total : ", total);
```

##### 15-6.6. join();

- `문자열로 배열을 연결한 결과`를 만든다.

```js
const numArr1 = [1, 2, 3, 4];
// 기본은 ,  연결된 글자
const result = numArr1.join("#");
// 결과는 string
console.log(`typeof ${typeof result} , ${result}`);
// typeof string , 1#2#3#4
```

##### 15-6.7. indexOf();

- 찾는 요소가 몇번째 인덱스 인지를 파악

```js
const numArr1 = [1, 2, 3, 4];
// 기본은 ,  연결된 글자
const result = numArr1.indexOf(3);
console.log(`typeof ${typeof result} , ${result}`);
// typeof number , 인덱스 2
```

##### 15-6.8. includes();

- 요소가 포함되었는지 아닌지

```js
const numArr1 = [1, 2, 3, 4];
// 기본은 ,  연결된 글자
const result = numArr1.includes(3);
console.log(`typeof ${typeof result} , ${result}`);
// typeof boolean , true
```

## 16. 객체(`{}`)와 배열(`[]`)의 필수 이해 사항

#### 16.1. 반복문

- 배열에서 사용하는 경우의 반복문 문법

```js
// 가장 전통적인 방식
const arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 배열의 요소 반복문 버전
arr.forEach(function (item) {
  console.log(item);
});

// 배열의 for of문
for (const item of arr) {
  console.log(item);
}

// 배열의 map : 새로운 배열을 만듦
const now = arr.map(function (item) {
  return item;
});
```

- 객체에서 사용하는 경우의 반복문 문법

```js
const person = {
  age: 10,
  nickName: "hong",
  isMember: false,
};

// 객체의 속성명 알아내기
for (let key in person) {
  console.log(key); //age, nickName, isMember
}

// 객체의 속성에 보관하는 값 알아내기
for (let key in person) {
  console.log(person[key]); // 10, hong, false
}
```

#### 16-2. 값을 추출해서 보관하ㅑ기

- 배열

```js
const arr = ["사과", "딸기", "참외"];

// 아래처럼 요소 값을 알아내는 것은 비추천
arr[0];
arr[1];
arr[2];

// 반복문으로 알아내기
for (let i = 0; i < arr.length; i++) {
  arr[i];
}
```

- `배열 Spread 문법` !!!!!!!!정말 중요!!!!!!!!

  - 배열의 요소를 알아내고,

  - 배열의 요소를 복사하고,

  - 새로운 배열에 담아주고

```js
const arr = ["사과", "딸기", "참외"];

// 아래처럼 하지는 않음
const apple = arr[0];
const straq = arr[1];
const melon = arr[2];

// 배열 Spread 문법
const [apple, straw, melon] = [...arr];

// 두 배열을 Spread 문법으로 합치기
const numArr = [1, 2, 3];
const strArr = ["a", "b", "c"];

// [1, "a", "b", "c", 2, 3]
// 아래처럼 권장하지는 않음
const sampleArr = [1, strArr[0], strArr[2], str[2], 2, 3];

// Spread 활용
const resultArr = [1, ...strArr, 2, 3];

// Rest 파라메터 문법
function showArr(...rest) {}
```

- 객체

```js
const person = {
  age: 10,
  nickName: "hong",
  isMember: false,
};

// 이렇게는 하지 말기
const newPerson = {
  age : person.age,
  nickName: person.nickName,
  isMember: person.isMember,
};

// 객체 Spread 문법
const nowPerson = {...person};

// 두개의 객체를 합치기
const a = {age:10, name: "hong"};
const b = {city : "대구", year:2025};
const result = {...a, ...b}
// 결과 {age: 10, name: "hong", city: "대구", year: 2025}

// 원본 객체 복사하고 새로운 속성 추가하기
const ori = {a:1 b:"안녕"}
const now = {...ori, gogo:"happy"}
// now {a:1, b:"안녕", gogo:"happy"}

// 함수에 매개변수로 객체를 복사해서 전달하기
function show({name, age}){
  console.log(name);
  console.log(age);
  }
  const user = {name:"아이유", age:20};
  show({...user})
```

## 17. 비동기(Asyncronous) 통신

- `비동기`는 시간이 오래 걸리는 작업

- 예 : 데이터 서버에서 자료를 요청(Request) 및 응답(Response)

- 예 : 데이터 서버에서 파일 전송 시

- 비동기 작업 중에 결과를 기다리지 않고 다른 작업을 병렬로 실행하도록

#### 17.1. 비동기 작업 문법 종류

- XHR (Xml Http Request)
- Callback
- Promise
- async/await

#### 17-2. 데모용 API 사이트

- https://jsonplaceholder.typicode.com/

- https://www.data.go.kr/index.jsp

#### 17-3. XHR

- 서버와 통신하는 작업을 위해서 기본적으로 제공이 됨

- `Request(요청)` : url로 자료 요청

- `Respone(응답)` : url로부터 자료를 돌려받음

- status 200류의 값 : 정상적으로 자료를 응답함

- status 400류의 값 : url이 존재하지 않음

- status 500류의 값 : 데이터 서버가 오류거나 전원이 꺼짐

- https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Status

#### 17.4. Callback 활용하기

- 자료 응답 후 처리하기

```js
// 데이터 서버에 자료를 호출함

function getData(api = "posts", fn) {
  // 1. xhr 객체 한개 만듦
  const xhr = new XMLHttpRequest();
  // 2. 주소를 연결함
  xhr.open("GET", `https://jsonplaceholder.typicode.com/${api}`);
  // 3. 웹브라우저로 요청
  xhr.send();

  // 4. 요청 이후 응답이 오기를 기다림
  xhr.onload = function () {
    //console.log("요청이 되어졌을 때 백엔드 회신정보 : ", xhr);
    if (xhr.status === 200) {
      // console.log("정상적인 Response 됨 : ", xhr.response);
      // 콜백함수 : 자료가 오면 자료를 활용하고 싶음
      fn(xhr.response);
    } else if (xhr.status === 404) {
      console.log("주소가 잘못되었네요.");
    } else if (xhr.status === 505) {
      console.log("서버에 오류입니다. 잠시 후 시도해 주세요.");
    }
  };
}
// 콜백함수 만들기 : 자료가 들어오면 처리함
const postsParser = function (res) {
  console.log(res);
};
const commentsParser = function (res) {};
const albumsParser = function (res) {};
const photosParser = function (res) {};
const todosParser = function (res) {};
const usersParser = function (res) {};
// 함수 사용
getData("posts", postsParser);
getData("comments", commentsParser);
getData("albums", albumsParser);
getData("photos", photosParser);
getData("todos", todosParser);
getData("users", usersParser);
```

#### 17-5. Promise 활용하기

- 서버 연동이 끝날 때 원하는 콜백함수 실행

- 2개의 매개변수를 전달 받음

- resolve 콜백함수 : 성공시 실행함수

- reject 콜백함수 : 실패시 실행함수

```js
// 데이터 서버에 자료를 호출함.

function getData(api = "posts") {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://jsonplaceholder.typicode.com/${api}`);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status === 200) {
        // 성공
        resolve(xhr.response);
      } else if (xhr.status === 404) {
        // 실패
        reject("데이터 없어요.");
      } else if (xhr.status === 505) {
        console.log("서버가 불안정합니다. 잠시 후 재접속해주세요.");
      }
    };
  });
}
// 함수 사용
getData("posts")
  .then(function (data) {
    return getData("comments");
  })
  .then(function (data) {
    return getData("albums");
  })
  .then(function (data) {
    return getData("photos");
  })
  .then(function (data) {
    return getData("todos");
  })
  .then(function (data) {
    return getData("users");
  })
  .catch(function (err) {});
```

#### 17-6. async / await(강력추천)

- Promise를 편하게 쓰기 위해서 최신 문법 제공

- `function 키워드 앞쪽에 async`를 작성

- `BE 연동 쪽에 await`를 작성

- 1단계

```js
async function getAllData() {
  try {
  } catch (error) {}
}

getAllData();
```

- 2단계

```js
async function getAllData() {
  try {
    const apiUrl = "https://jsonplaceholder.typicode.com";
    // BE 데이터 연동 시도
    let res = await fetch(`${apiUrl}/posts`);
    let data = await res.json();
    console.log(data);

    res = await fetch("https://jsonplaceholder.typicode.com/comments");
    data = await res.json();
    console.log(data);

    res = await fetch("https://jsonplaceholder.typicode.com/albums");
    data = await res.json();
    console.log(data);

    res = await fetch("https://jsonplaceholder.typicode.com/photos");
    data = await res.json();
    console.log(data);

    res = await fetch("https://jsonplaceholder.typicode.com/todos");
    data = await res.json();
    console.log(data);

    res = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("ERROR 입니다. : " + error);
  }
}

getAllData();
```
