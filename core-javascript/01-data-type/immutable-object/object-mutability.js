// 객체의 가변성에 따른 문제점
let user = {
    name: 'haem',
    gender: 'male'
};

// 매개변수 user -> 원래 객체의 주소를 복사해서 받는다.
let changeName = function (user, newName) {
    let newUser = user;
    newUser.name = newName; // newUser 역시 user와 동일한 객체를 참조
    return newUser;
};

// 참조형 데이터(user)를 함수에 전달
let user2 = changeName(user, 'kuri');

if (user !== user2) {               // false
    console.log('유저 정보가 변경되었습니다!');
}
console.log(user.name, user2.name); // kuri, kuri
console.log(user === user2);        // true