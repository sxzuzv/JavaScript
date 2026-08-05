var Person = function (name) {
    this.name = name;
};
Person.prototype.name = '이지금';
Person.prototype.getName = function () {
    return this.name;
};

var iu = new Person('지금');
iu.getName = function () {
    return '바로 ' + this.name;
};

console.log(iu.__proto__.getName.call(iu));    // 지금