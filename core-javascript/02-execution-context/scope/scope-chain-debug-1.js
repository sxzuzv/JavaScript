// 크롬 브라우저 환경에서 스코프 체인 확인 (1)
// [[Scopes]] outer 스코프에 inner 변수만 노출

var a = 1;

var outer = function () {
    var b = 2;

    var inner = function () {
        console.dir(inner);
    };

    inner();
};

outer();