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
let result = true $$ true; // true
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
let resultA = ("1" == 1); // true
 // 데이터 값의 종류는 비교하지 않음
let resultB = ("1" === 1); // false
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
  profile: {name: "홍길동"},
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
