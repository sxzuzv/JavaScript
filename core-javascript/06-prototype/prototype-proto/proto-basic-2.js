var Person = function (name) {
    this._name = name;
};

Person.prototype.getName = function () {
    return this._name;
};

var sujin = new Person('sujin');
sujin.__proto__._name = 'SUJIN__proto__';

console.log(sujin.__proto__.getName()); // SUJIN__proto__