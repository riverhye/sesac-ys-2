class House {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        console.log(`${new Date().getFullYear() - this.year}년 전에 건축됨`);
    }
}

const house1 = new House('no1', 2013);
house1.age();


// Class 상속
// 공통 속성이나 메서드가 담긴 클래스를 상속받고, 새로운 속성 추가.
class Apartment extends House{
    constructor(name, year, floor) {
        // 부모(House)의 생성자 호출
        super(name, year);
       this.floor = floor;
    }

    // 상속을 사용하면 오버라이딩을 할 수 있다.
    // 오버라이딩 : 부모에 있는 메서드(ex. age)를 자식이 다시 정의함
    age() {
        super.age(); // 부모 것을 불러오기
        console.log(`입주는 ${this.year+1} 년부터 시작했습니다.`);
    }

}

const apt1 = new Apartment('Raemian', 2014, 9)
console.log(apt1.name, apt1.year, apt1.floor);
apt1.age();


// cf. 오버 로딩 : 똑같은 이름으로 여러 함수를 선언
// 즉 매개변수가 달라서 다른 함수로 간주된다.
// 하지만 JS에서는 정의한 매개변수의 수와 달라도 함수명이 같으면 하나의 함수로 인식한다.
// 그렇다면? 매개변수에 값을 미리 할당하여 sum 등의 return값을 받는다.
function test(a, b=0, c=0) {
    return a + b + c;
}
// 매개변수가 2개이지만 c엔 값이 없기 때문에 인자가 2개인 것과 다를 바 없이 결과값을 도출.
// test(4, 5);

function test(a, b) {
    console.log(`a: ${a}, b: ${b}`)
}

function test(a, b, c) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`)
}

// test(5, 6); // a: 5, b: 6, c: undefined