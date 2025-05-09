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
