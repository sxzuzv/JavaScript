// 디버거를 이용한 스코프 체인 확인

var a = 1;

var outer = function () {
    var b = 2;

    var inner = function () {
        console.log(b);
        debugger;
    };

    inner();
};

outer();