var Grade = function () {
    var args = Array.prototype.slice.call(arguments);

    for (var i = 0; i < args.length; i++) {
        this[i] = args[i];
    };

    this.length = args.length;
};
Grade.prototype = [];   // Grade.prototype이 배열의 인스턴스를 바라보게 한다.

var g = new Grade(100, 80);
console.log(g);

g.pop();
console.log(g);

g.push(1127);
console.log(g);