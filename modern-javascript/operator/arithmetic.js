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