function test() {
    console.log('test');
}

console.log(test()); // undefined
// WHY? test 함수는 return값이 없어서 호출한 함수의 내용을 콘솔에 찍지만
// 함수 자체를 콘솔에 찍어봤자 return할 것이 없어 undefined


// 실습
// 0. 직사각형 넓이
class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        // return으로 반환하면 console.log
        // console.log로 해두면 걍 메서드 실행
        const w = Number(this.width);
        const h = Number(this.height);
        return w * h;
    }
}

const rec1 = new Shape(3, 4);
console.log(rec1.getArea());


// 1. 직사각형 대각선 길이
class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }

    getArea() {
        super.getArea;
    }

    math() {
        return Math.sqrt(super(w)**2 + super(h)**2);
    }
}

const rec2 = new Rectangle(3, 4);
console.log(rec2.math());


// 2. 삼각형 넓이
class Triangle extends Shape {
    constructor(width, height) {
    super(width, height);
    }

    getArea() {
        // 나누기..?
        `삼각형 넓이는 ${Number(super.getArea() / 2)}`;
    }
}

const tri = new Triangle(3, 4);
tri.getArea();


// 3. 원 넓이
