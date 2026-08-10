var ES5 = function (name) {
    this.name = name;
};
ES5.staticMethod = function () {
    return this.name + ' static Method';
};
ES5.prototype.method = function () {
    return this.name + ' method';
};
var es5Instance = new ES5('es5');
console.log(ES5.staticMethod());    // ES5 static Method
console.log(es5Instance.method());  // es5 method

var ES6 = class {
    constructor (name) {
        this.name = name;
    }
    static staticMethod () {
        return this.name + ' static Method';
    }
    method () {
        return this.name + ' method';
    }
};
var es6Instance = new ES6('es6');
console.log(ES6.staticMethod());    // ES6 static Method
console.log(es6Instance.method());  // es6 method