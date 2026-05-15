// 함수의 의미 [1] 반복적인 작업을 정의한다.
// (1) 함수 적용 전
console.log("=== 함수 적용 전 ===");
let a = 3, b = 4;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);

let c = 10, d = 2;

console.log(`${c} + ${d} = ${c + d}`);
console.log(`${c} - ${d} = ${c - d}`);
console.log(`${c} * ${d} = ${c * d}`);
console.log(`${c} / ${d} = ${c / d}`);

let e = 7, f = 5;

console.log(`${e} + ${f} = ${e + f}`);
console.log(`${e} - ${f} = ${e - f}`);
console.log(`${e} * ${f} = ${e * f}`);
console.log(`${e} / ${f} = ${e / f}`);

// (2) 함수 적용 후
function allArithemics (x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
    console.log(`${x} - ${y} = ${x - y}`);
    console.log(`${x} * ${y} = ${x * y}`);
    console.log(`${x} / ${y} = ${x / y}`);
}

console.log("=== 함수 적용 후 ===");
allArithemics(a, b);
allArithemics(c, d);
allArithemics(e, f);


// 함수의 의미 [2] input을 받아 output을 반환(return)한다.
function add (x, y) {
    return x + y;
}

let sum = add(6, 8);

console.log(sum);
console.log(add(6, 8));
console.log(
    add(add(1, 2), add(3, 4))
);

function isOdd (x) {
    return !!(x % 2);
}

let target = 12;

console.log(
    `${target}(는)은 ${isOdd(target) ? '홀' : '짝'}수입니다.`
)