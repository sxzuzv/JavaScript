// ** 중첩된 객체에 대한 얕은 복사와 깊은 복사
// [1] 얕은 복사: 바로 아래 단계(1depth)의 값만 복사
// -> 객체에 직접 속한 프로퍼티에 대해서는 복사해서 완전히 새로운 데이터를 만든다.

const copyObject = function (target) {
    let result = {};
    for (let prop in target) {
        result[prop] = target[prop];
    }
    return result;
};

// 중첩된 객체
const user = {
    name: 'sujin',
    urls: {
        portfolio: 'https://github.com/sxzuzv',
        blog: 'https://deszlop.tistory.com/'
    }
};

const user2 = copyObject(user);

user2.name = 'haem';
console.log(user.name === user2.name);  // false

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio);  // true

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog);    // true


// [2] 깊은 복사: 내부의 모든 값들을 찾아 전부 복사
// -> 프로퍼티가 참조형 데이터인 경우 다시 그 내부의 프로퍼티들을 복사해야 한다.
const user3 = copyObject(user);
user3.urls = copyObject(user.urls); // urls 프로퍼티의 내부까지 복사

user3.urls.portfolio = '';
console.log(user.urls.portfolio);   // http://portfolio.com
console.log(user3.urls.portfolio);  // ''
console.log(user.urls.portfolio === user3.urls.portfolio);  // false

user3.urls.blog = 'haem-blog!!';
console.log(user.urls.blog);        // '' (위에서 공란으로 변경한 상태)
console.log(user3.urls.blog);       // haem-blog!!
console.log(user.urls.blog === user3.urls.blog);    // false