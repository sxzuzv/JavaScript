// hasOwnProperty 메서드를 활용한 복사
// 객체가 직접 가진(own) 프로퍼티만 복사한다.

const parent = {
    name: '부모'
};

const child = Object.create(parent); // child 객체 생성
child.hobby = 'dance';  // name은 상속받은 프로퍼티, hobby는 child 객체가 직접 가진 프로퍼티

function copyObject(target) {
    const result = {};

    for (let prop in target) {
        // 상속이 아닌 객체가 직접 가진 프로퍼티만 복사
        if (target.hasOwnProperty(prop)) {
            result[prop] = target[prop];
        }
    }

    return result;
}

console.log(copyObject(child)); // { hobby: 'dance' }, 복사 결과에 name 프로퍼티가 없음!