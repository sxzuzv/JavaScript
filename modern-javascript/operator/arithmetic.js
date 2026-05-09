// 기본 연산자
const a = 3;
const b = 2;

console.log('+ : ' + (a + b));
console.log('- : ' + (a - b));
console.log('* : ' + (a * b));
console.log('/ : ' + (a / b));
console.log('% : ' + (a % b));
console.log('** : ' + (a ** b));

// 더하기 연산자: 숫자와 문자열의 더하기
const msg = '밤';
console.log(3 + msg); // 숫자가 문자열의 속성으로 변경

// 더하기 연산자: 숫자형으로 형 변환
console.log(+'628' + 1); // 629
console.log(+true);      // 1
console.log(+false);     // 0

// 빼기, 곱하기, 나누기 연산자
// 숫자 형태로 작성된 문자열은 숫자형으로 자동 변환하여 연산
console.log('10' - 3);
console.log('10' * 3);
console.log('10' / 3);
console.log('10' - '3');
console.log('10' * '3');
console.log('10' / '3');

// 할당(대입) 연산자
const k = 3;
const u = k + 6;
const r = u - k;
console.log(k);
console.log(u);
console.log(r);

// 복합 할당 연산자
let z = 3;
z += 5;
console.log(z);

let v = 6;
v -= 3;
console.log(v);

let c = 9;
c *= 2;
console.log(c);

let d = 2;
d /= 1;
console.log(d);