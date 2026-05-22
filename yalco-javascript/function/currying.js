// 기본
function addMultSub (a, b, c, d) {
    return (a + b) * c - d;
}

// 화살표 함수 ver.
const addMultSub2 = (a, b, c, d) => (a + b) * c - d;

console.log(
    addMultSub(2, 3, 4, 5),
    addMultSub2(2, 3, 4, 5)
);

// 커링으로 작성
function curryAddMultSubt (a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return (a + b) * c - d;
            }
        }
    }
}

// 커링 화살표 함수 ver.
const curryAddMultSubt2 = a => b => c => d => (a + b) * c - d;

console.log(
    curryAddMultSubt(2)(3)(4)(5),
    curryAddMultSubt2(2)(3)(4)(5)
);

// 기본 커링 ver.
const curryAddMultSubtFrom2 = curryAddMultSubt(2);
const curryMultSubtFrom5 = curryAddMultSubt(2)(3);
const currySubtFrom20 = curryAddMultSubt(2)(3)(4);

console.log(curryAddMultSubtFrom2.toString());
console.log(curryMultSubtFrom5.toString());
console.log(currySubtFrom20.toString());

// 나머지 인자들로 실행
console.log(
  curryAddMultSubtFrom2(3)(4)(5),
  curryMultSubtFrom5(4)(5),
  currySubtFrom20(5)
);

// 커링 화살표 함수 ver.
const addMultSubtFrom2 = curryAddMultSubt2(2);
const multSubtFrom5 = curryAddMultSubt2(2)(3);
const subtFrom20 = curryAddMultSubt2(2)(3)(4);

console.log(addMultSubtFrom2.toString());
console.log(multSubtFrom5.toString());
console.log(subtFrom20.toString());