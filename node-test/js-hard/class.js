// Class는 하나의 틀. 이 틀에 해당하는 구체적인 개별 개체를 생성한다.
// PascalCase 규칙으로 식별자 생성

class Cat {
    // constructor 생성자 : 메서드의 일종인데, 클래스를 이용해 객체를 만드는 순간 호출되는 메서드.
    // 객체를 만드는 순간 ex. const cat4 = new Cat()
    // 이때 new 연산자로 만든 생성자와 매개변수를 동일하게 작성해야 한다.
    // 아래처럼 속성은 생성자에서 정의한다.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 클래스 내 메서드는 function 키워드 없이 바로 작성
    mew () {
        console.log("meww");
    }

    info() {
        console.log(`name: ${this.name}, age: ${this.age}`)
    }
}

const cat1 = new Cat('choco', 2);
const Cat2 = new Cat('coco', 3);
const cat3 = new Cat('ming', 2);
const cat4 = new Cat('hoji', 5);

cat4.mew();
// 객체를 new연산자로 새로 만들 때마다 새 공간을 할당한다.
console.log(cat4.name === cat3.name); // false

cat4.info(); // name: hoji, age: 5



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
// age 메서드에 이미 console이 있어서 따로 console로 호출하지 않아도 된다.
house1.age();


class IPhone {
    constructor(seriesNumber, color) {
        this.seriesNumber = seriesNumber;
        this.color = color;
    }
    
    info() {
        console.log(this.seriesNumber, this.color);
    }
}

const phone1 = new IPhone('6s', 'spacegray');
phone1.info();