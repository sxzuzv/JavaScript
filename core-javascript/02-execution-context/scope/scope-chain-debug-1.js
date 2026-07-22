// 크롬 브라우저 환경에서 스코프 체인 확인 (1)
// 스코프 체인 중 현재 실행 컨텍스트를 제외한 상위 스코프 정보들을 콘솔을 통해 확인한다.
// 확인 방법: 함수 내부에서 함수를 출력한다.

var a = 1;

var outer = function () {
    var b = 2;

    var inner = function () {
        console.dir(inner);
    };

    inner();
};

outer();