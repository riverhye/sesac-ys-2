// function test() {
//     console.log('test');
// }

// console.log(test()); // undefined
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
        return Number(this.width) * Number(this.height);
    }
}

const rec1 = new Shape(3, 4);
console.log(rec1.getArea());

// 1. 직사각형 대각선 길이
class Rectangle extends Shape {
    constructor(width, height) {
        // super에서 가져오는 인자들은 한번에 기입 (super 한 번만!)
        super(width, height);
    }

    getArea() {
        return Math.sqrt(this.width**2 + this.height**2);
    }
}

const rec2 = new Rectangle(3, 4);
console.log(rec2.getArea());


// 2. 삼각형 넓이
class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }

    getArea() {
        return this.width * this.height / 2
    }
}

const tri = new Triangle (3, 4);
console.log(tri.getArea());

// 3. 원 넓이
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return 3.14 * (this.radius**2);
    }
}

const cir = new Circle(4);
console.log(cir.getArea());