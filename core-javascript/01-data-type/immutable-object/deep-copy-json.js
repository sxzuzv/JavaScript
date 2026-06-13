// JSON을 활용한 깊은 복사
// 객체 -> JSON 문자열로 변환 -> 다시 새로운 객체로 복원

const copyObjectViaJSON = function (target) {
    return JSON.parse(JSON.stringify(target));
};

const obj = {
    a: 3,
    b: {
        c: null,
        d: [6, 28],
        func1: function () { console.log(11) }
    },
    func2: function () { console.log(27) }
};

// JSON으로 표현 가능한 프로퍼티만 복사
// 함수(func1, func2)는 복사 대상에서 제외
const obj2 = copyObjectViaJSON(obj);

obj2.a = 4;
obj2.b.c = 5;
obj2.b.d[1] = 21;

console.log(obj);  // { a: 3, b: { c: null, d: [ 6, 28 ], func1: [Function: func1] }, func2: [Function: func2] }
console.log(obj2); // { a: 4, b: { c: 5, d: [ 6, 21 ] } }