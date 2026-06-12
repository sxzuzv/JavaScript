// 얕은 복사 ; 기존 정보를 복사해 새로운 객체를 반환
// 바로 아래 단계(1depth)의 값만 복사
let user = {
    name: 'haem',
    gender: 'male'
};

let copyObject = function (target) {
    let result = {};
    for (let prop in target) {
        result[prop] = target[prop];
    }
    return result;
};

let user2 = copyObject(user);

console.log(user);  // { name: 'haem', gender: 'male' }
console.log(user2); // { name: 'haem', gender: 'male' }
console.log(user === user2);    // false