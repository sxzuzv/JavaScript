// 자바스크립트 함수는 일급 객체
// 일급 객체 특성: 할당 / 인자 / 반환

// 1. 할당
/* 예제 1 */
function isOddNum (number) {
    console.log(
        (number % 2 ? '홀' : '짝') + '수입니다.'
    );

    return number % 2 ? true : false;
};

// 함수 이름을 식별자로 하여 할당
const checkIfOdd = isOddNum;

console.log(checkIfOdd(28));

/* 예제 2 */
let num1 = 6, num2 = 28;

let func1 = (a, b) => a + b;
let func2 = (a, b) => a - b;

console.log(func1(num1, num2), func2(num1, num2));

// 함수에 다른 함수를 할당
func1 = func2;
console.log(func1(num1, num2), func2(num1, num2));

/* 예제 3 > 함수를 객체 혹은 배열의 값으로 할당 */
// (1) 함수를 객체의 값으로 할당
let haem = {
    name: '햄',
    age: '24',
    married: false,
    introduce: function (formal) {
        return formal
        ? '안녕하십니까. 햄 사원입니다.' 
        : '안녕하세요. 햄이라고 해요.';
    }
};

console.log(haem.introduce(true));
console.log(haem.introduce(false));

let person = {
    name: '수진',
    age: '100',
    married: false,
    introduce: function () {
        return `저는 ${this.name}, ${this.age}살이고 ` 
        + `${this.married ? '기혼' : '미혼'}입니다.`;  
    }
};

console.log(person.introduce());

// (2) 함수를 배열의 값으로 할당
let arithmetics = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a / b
];

for (arm of arithmetics) {
    console.log(arm(6, 8));
}


// 2. 인자
// 인자를 전달받는 함수: 고차함수
// 인자로 전달되는 함수: 콜백함수

/* 예제 1 */
let list = [4, 5, 6, 7, 8];

// 고차함수: doInArray
// 콜백함수: console.log
function doInArray (array, func) {
    for (item of array) {
        func(item);
    }
}

// console.log: console 객체에서 log 키에 할당된 함수
doInArray(list, console.log);

/* 예제 2 */
// 고차함수: doNTimes
// 콜백함수: (x, y) => x * y, (x, y) => x / y
function doNTimes (func, repeat, x, y) {
    let result = x;
    for (let i = 0; i < repeat; i++) {
        result = func(result, y);
    }
    return result;
}

console.log(
    doNTimes((x, y) => x * y, 3, 5, 2),
    doNTimes((x, y) => x / y, 3, 5, 2),
);

/* 예제 3 */
// calculate: 콜백함수
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// evaluate: 콜백함수
const isOdd = (number) => !!(number % 2);
const isPositive = (number) => number > 0;

// 고차함수: calcAndEval
// 두 개의 콜백함수를 인자로 받는다.
function calcAndEval (calc, eval, x, y) {
    return eval(calc(x, y));
}

console.log(
    calcAndEval(add, isOdd, 3, 8),
    calcAndEval(subtract, isPositive, 3, 8),
    calcAndEval(multiply, isOdd, 3, 8)
);


// 3. 반환
// 함수가 결과값으로 반환된다.

/* 예제 1 */
function getIntroFunc (name, formal) {
    return formal
    ? function () {
        console.log(`안녕하십니까, ${name}입니다.`);
    } : function () {
        console.log(`안녕하세요! ${name}이라고 해요.`);
    }
}

const suIntro = getIntroFunc('수진', true);
const haemIntro = getIntroFunc('햄', false);

suIntro();
haemIntro();

/* 예제 2 */
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

function comb3ArmFuncs(armFun1, armFun2, armFun3) {
    return (x, y) => armFun3(armFun2(armFun1(x, y), y), y);
}

const sum_mul_sub = comb3ArmFuncs(sum, mul, sub);
const mul_sum_div = comb3ArmFuncs(mul, sum, div);
const div_sum_mul = comb3ArmFuncs(div, sum, mul);

console.log(
    sum_mul_sub(6, 28),
    mul_sum_div(11, 27),
    div_sum_mul(2, 21)
);