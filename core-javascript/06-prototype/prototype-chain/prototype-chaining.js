var arr = [1, 2];
console.log(Array.prototype.toString.call(arr));  // 1, 2
console.log(Object.prototype.toString.call(arr)); // [objct Array]
console.log(arr.toString());                      // 1, 2

arr.toString = function () {
    return this.join('_');
};
console.log(arr.toString());                      // 1_2