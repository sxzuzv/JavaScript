// 함수를 정의하는 방법
// [1] 함수 선언
function add (x, y) {
    return x + y;
}

console.log(add(1, 2));

// [2] 상수나 변수에 함수 대입 > 호이스팅 불가
const subt = function (x, y) {
    return x - y;
}

console.log(subt(8, 3));

// ** 기존 함수의 재정의 가능
add = function (x, y) {
  console.log(`${x}와(과) ${y}를 더합니다.`);
  console.log(`결과는 ${x + y}입니다.`);
  return x + y;
}

console.log(add(1, 2));

// [3] 화살표 함수 > 호이스팅 불가
// (1) 한 줄 안에 값만 반환하는 경우
// return 문 없이도 값 반환 가능
const mult = (x, y) => x * y;

console.log(mult(3, 6));

// (2) 두 줄 이상의 작업이 있는 경우
// 값의 반환이 필요한 경우 return 문 작성
const sum = (x, y) => {
  console.log(`${x}와 ${y}의 합계를 구합니다.`);
  console.log(`결과는 ${x + y}입니다.`);
  return x + y;
};

console.log(sum(2, 7));

// (3) 인자가 하나인 경우 괄호 생략 가능
const pow = x => x ** 2;

console.log(pow(3));