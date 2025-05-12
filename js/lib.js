/**
 * 숫자 더하기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number}  덧셈 결과
 */
function add(a, b) {
  return a + b;
}

/**
 * 숫자 빼기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number}  뺄셈 결과
 */
function minus(a, b) {
  return a - b;
}

/**
 * 숫자 곱하기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number}  곱셈 결과
 */
function multi(a, b) {
  return a * b;
}

/**
 * 숫자 나누기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number}  나눗셈 결과
 */
function divide(a, b) {
  if (b === 0) {
    return alert("분모는 0이 아니어야 합니다");
  }
  // 데이터 알아내고, 타입 비교하기
  if (typeof a !== "number") {
    return alert("분자는 숫자여야 합니다");
  }
  if (typeof b !== "number") {
    return alert("분모는 숫자여야 합니다");
  }
  return a / b;
}

/**
 * 계산기 기능
 * 계산기 기능은 +, -, *, / 기능이 있습니다
 * @param {string} symbol +, -, *, / 기호 중 1개 입력
 * @param {number} a 숫자 입력
 * @param {number} b 숫자 입력
 * @returns {number} 결과는 숫자
 *
 * 사용예)
 * ```javascript
 * const result = calcurator("+", 5, 4)
 */
function calcurator(symbol, a) {
  if (typeof symbol !== "string") {
    return alert("기호를 입력하세요");
  }
  switch (symbol) {
    case "+":
      add(a, b);
      break;
    case "-":
      minus(a, b);
      break;
    case "*":
      multi(a, b);
      break;
    case "/":
      divide(a, b);
      break;
    default:
      return alert("올바른 기호를 입력하세요");
  }
}

// 외부로 공개할 함수 생성

// 덧셈 사용
const resultAdd = add(5, 4);
const resultMinus = minus(5, 4);
const resultMulti = multi(5, 4);
const resultDevide = divide(5, 4);

// for in 구문 예제 (대상은 객체 속성 반복)

const singer = {
  id: "123",
  name: "아이유",
  age: 30,
  city: "서울",
};
// 개발자가 직접 알아내는 경우. BE에서 추가된 데이터들을 FE에서 알 수 없음
console.log(singer.id);
console.log(singer.name);
console.log(singer.age);

// 반복문 활용
for (let key in singer) {
  console.log(key);
  console.log(singer[key]);
}
// for in에서 객체를 찾을때는 .이 아닌 []로 접근해야함 (연관배열)

const bts = {
  id: "123",
  name: "bts",
  age: [30, 20, 33],
  city: "서울",
};
for (let key in bts) {
  console.log(`${key} : ${bts[key]}`);
}

const good = {
  productNum: 5502,
  targetProductService: "interTourR",
  targetProductId: "7",
  targetProductSubId: null,
  targetProductName: "[실시간 항공권] 인천 ↔ 나트랑",
  targetProductSubName: null,
  targetProductDetail: "",
  targetProductImageUrl:
    "https://common-live-vod.interparkcdn.net/data/image/20250106/14/96/20250106073804.jpg",
  targetProductOriginPrice: 221400,
  targetProductDiscountPrice: 0,
  targetProductPrice: 211400,
  targetProductLinkUrl:
    "https://travel.interpark.com/air/search/a:ICN-a:CXR-20250616/a:CXR-a:ICN-20250619?cabin=ECONOMY&infant=0&child=0&adult=1&byAirline=RS",
  targetDisplayStartTime: null,
  targetDisplayEndTime: null,
  displayOrder: 7,
  scheduleNum: 2010,
  status: 1,
  serviceName: "투어-해외여행",
};

for (let key in good) {
  console.log(`${key} : ${good[key]}`);
}

const citiesArr = ["대구", "서울", "부산"];
for (let city of citiesArr) {
  console.log(city);
}

const words = "안녕하세요. 반가워요.";
for (let i of words) {
  console.log(i);
}

let count = 0;
while (count < 5) {
  // 거짓을 만들기 위한 조건을 부여
  count = count + 1;
  console.log(count);
}

let count = 0;
do {
  count = count + 1;
  console.log(count);
} while (count < 5);
