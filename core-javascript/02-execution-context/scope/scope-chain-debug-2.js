// 크롬 브라우저 환경에서 스코프 체인 확인 (2)
// [[Scopes]] outer 스코프에 inner 함수 내부에서 호출한 변수까지 노출

var a = 1;

var outer = function () {
    var b = 2;

    var inner = function () {
        console.log(b);
        console.dir(inner);
    };

    inner();
};

outer();