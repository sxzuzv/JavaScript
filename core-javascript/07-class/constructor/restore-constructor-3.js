// 클래스 상속 및 추상화 방법 - 완성본 (3) - Object.create 활용

var extendClass3 = function (SuperClass, SubClass, subMethods) {
    SubClass.prototype = Object.create(SuperClass.prototype);
    SubClass.prototype.constructor = SubClass;

    if (subMethods) {
        for (var method in subMethods) {
            SubClass.prototype[method] = subMethods[method];
        }
    }
    
    Object.freeze(SubClass.prototype);
    return SubClass;
};

var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
};
Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};

var Square = extendClass3(Rectangle, function (width) {
    Rectangle.call(this, width, width);
});
var sq = new Square(5);
console.log(sq.getArea());      // 25