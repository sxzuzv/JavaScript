var Rectangle = function (width, height) {      // 생성자
    this.width = width;
    this.height = height;
};

Rectangle.prototype.getArea = function () {     // (프로토타입) 메서드
    return this.width * this.height;
};

Rectangle.isRectangle = function (instance) {   // 스태틱 메서드
    return instance instanceof Rectangle &&
        instance.width > 0 && instance.height > 0;
};

var rect = new Rectangle(3, 4);
console.log(rect.getArea());                // 12
console.log(Rectangle.isRectangle(rect));   // true
console.log(rect.isRectangle(rect));        // TypeError: rect.isRectangle is not a function