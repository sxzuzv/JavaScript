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