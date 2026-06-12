// 객체의 가변성에 따른 문제점의 해결 방법
let user = {
    name: 'haem',
    gender: 'male'
};

// 새로운 객체를 반환하도록 수정
let changeName = function (user, newName) {
    return {
        name: newName,
        gender: user.gender // 변경할 필요 없는 프로퍼티의 값을 기존 객체에서 가져와 할당
    };
};

// 참조형 데이터(user)를 함수에 전달
// 함수 내부에서 새로운 객체를 생성하고 반환하므로 user2는 user와 다른 객체를 참조
let user2 = changeName(user, 'kuri');

if (user !== user2) {               // true (서로 다른 객체의 참조값 비교)
    console.log('유저 정보가 변경되었습니다!');
}
console.log(user.name, user2.name); // haem, kuri (원본 객체는 변경되지 않음)
console.log(user === user2);        // false