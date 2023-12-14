type gender = 'Man' | 'Woman';
const une: gender = 'Woman';

// 자주 쓰일 tuple은 자료형 지정
type productInfo = [string, number];
const coke: productInfo = ['coke', 3000];

// 객체 타입 지정은 interface (대문자로 시작)
interface ProductInfo2 {
  productName: string;
  price: number;
}

const cider: ProductInfo2 = { productName: 'cider', price: 2000 };

// 물론 type도 되지만 객체는 주로 interface 사용
type ProductInfo3 = {
  productName: string;
  price: number;
  sale?: number; // ? 붙이면 number | undefined 처럼 인식
};

const beer: ProductInfo3 = { productName: 'beer', price: 6000 };
console.log(beer.sale); // undefined

// 객체 안 객체 지정 + Optional Chaining
interface Seller {
  name: string;
}

interface ProductInfo4 {
  productName: string;
  price: number;
  sale?: number;
  seller?: Seller;
}

const soju: ProductInfo4 = {
  productName: 'soju',
  price: 5000,
  // seller: { name: 'une' },
};

console.log(soju.seller?.name);
// seller?로 지정(optional key)해줘서 undefined 될 수 있음 -> optional chaining(?.) 필요

// 객체 상속 (interface에서는 상속 가능)
interface Person {
  name: string;
  age: number;
  eat: () => void; // return 없으면 void라고 정의
}

interface Student extends Person {
  studentID: string;
}

// const person: Person = { name: 'une', age: 10 };
const stu: Student = {
  name: 'une',
  age: 10,
  studentID: 'no.1',
  eat: () => console.log('yummy'),
};

// 실습

// 아래 나와 있는 heroGame_A 와 heroGame_B 를 만족할 수 있는 interface Game 만들어보기
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일',
};

let heroGame_B: Game = {
  title: 'MARVEL 퓨처파이트',
  price: 65000,
  category: '롤플레잉',
  platform: '모바일',
};
