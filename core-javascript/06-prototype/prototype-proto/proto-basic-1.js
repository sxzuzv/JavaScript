var Person = function (name) {
    this._name = name;
};

// prototype에 getName 메서드 지정
Person.prototype.getName = function () {
    return this._name;
};

var sujin = new Person('sujin');
console.log(sujin.__proto__.getName()); // undefined