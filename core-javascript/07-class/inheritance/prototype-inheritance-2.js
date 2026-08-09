var Grade = function () {
    var args = Array.prototype.slice.call(arguments);

    for (var i = 0; i < args.length; i++) {
        this[i] = args[i];
    };

    this.length = args.length;
};
Grade.prototype = ['a', 'b', 'c', 'd'];

var g = new Grade(100, 80);
console.log(g);

g.push(1127);
console.log(g);             // Array { '0': 100, '1': 80, '2': 1127, length: 3 }

delete g.length;
g.push(30);
console.log(g);             // Array { '0': 100, '1': 80, '2': 1127, '4': 30, length: 5 }