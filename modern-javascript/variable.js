/* 변수 기본 사용 */
var msg = 'Hello';
msg = 100;  // 값을 변경
console.log(msg);

/* 변수의 복사 */
var cat = 'meow';
var count = 3;
cat = count; // 타입 관계 없이 복사
console.log(cat);

/* 예외적으로 사용 가능한 특수문자 */
var $ = 10;
var _ = 20;
var age = 30;
console.log($ - _ + age);