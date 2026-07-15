// 함수 선언문과 함수 표현식 (2) - 호이스팅을 마친 상태

// 함수 선언문은 전체를 호이스팅한다.
/* 호이스팅이 끝난 상태에서의 함수 선언문은 함수명으로 
   선언한 변수에 함수를 할당한 것처럼 여길 수 있다. */
var sum = function sum (a, b) {
    return a + b;
};
var multiply;   // 변수는 선언부만 끌어올린다.

console.log(sum(1, 2));
console.log(multiply(3, 4));

// 변수의 할당부는 원래 자리에 남겨둔다.
multiply = function (a, b) {
    return a * b;
};