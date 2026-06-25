// 자바스크립트 엔진에서 자동으로 undefined를 부여하는 경우

let a;
console.log(a); // (1) undefined -> 값을 대입하지 않은 변수에 접근

let obj = { a: 1 };
console.log(obj.a); // 1
console.log(obj.kuri);  // (2) undefined -> 객체 내부에 존재하지 않는 프로퍼티에 접근

let func = function() { };
let c = func(); // (3) undefined -> 반환(return) 값이 없을 시 undefined를 반환한 것으로 간주
console.log(c); // undefined