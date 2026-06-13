// copyObject 함수를 깊은 복사 형태로 수정
const copyObjectDeep = function (target) {
    let result = {};

    if (typeof target === 'object' && target !== null) {
        for (let prop in target) {
            result[prop] = copyObjectDeep(target[prop]);
        }
    } else {
        result = target;
    }

    return result;
}

const user = {
    name: 'haem',
    age: 24
};

const user1 = {
    name: 'kuri',
    core: {
        hobby: 'dance',
        eat: '쌀밥'
    }
}

// 함수 실행 시 내부 동작의 차이를 이해해보자!
console.log(copyObjectDeep(user));  // { name: 'haem', age: 24 }
console.log(copyObjectDeep(user1)); // { name: 'kuri', core: { hobby: 'dance', eat: '쌀밥' } }