var Person = function (name) {
    this._name = name;
};

Person.prototype.getName = function () {
    return this._name;
};

var sujin = new Person('sujin');
console.log(sujin.getName());   // sujin