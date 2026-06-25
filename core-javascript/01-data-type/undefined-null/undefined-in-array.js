// undefined와 배열

/* 비어있는 요소 */
let arr1 = [];
arr1.length = 6;
console.log(arr1);  // [ <6 empty items> ]

let arr2 = new Array(2);
console.log(arr2);  // [ <2 empty items> ]

/* undefined를 할당한 요소 */
let arr3 = [undefined, undefined, undefined];
console.log(arr3);  // [ undefined, undefined, undefined ]


// 빈 요소와 배열의 순회
let haem = [undefined, 28];
let kuri = [];
kuri[1] = 1;

/* 순회와 관련된 배열 메서드에서의 출력 */
haem.forEach(function (v, i) { console.log(v, i); });   // undefined 0 / 28 1
kuri.forEach(function (v, i) { console.log(v, i); });   // 1 1

console.log(
    haem.map(function (v, i) { return v + i; })         // [ NaN, 29 ]
);
console.log(
    kuri.map(function (v, i) { return v + i; })         // [ <1 empty item>, 2 ]
);

console.log(
    haem.filter(function (v, i) { return !v; })         // [ undefined ]
);
console.log(
    kuri.filter(function (v, i) { return !v; })         // []
);

console.log(
    haem.reduce(function (p, c, i) { return p + c + i; }, '')   // undefined0281
);
console.log(
    kuri.reduce(function (p, c, i) { return p + c + i; }, '')   // 11
);