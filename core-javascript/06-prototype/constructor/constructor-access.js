var Haem = function (name) {
    this.name = name;
};

var haem1 = new Haem('햄햄1');                          // { name: '햄햄1' } true
var haem1Proto = Object.getPrototypeOf(haem1);

var haem2 = new Haem.prototype.constructor('햄햄2');    // { name: '햄햄2' } true
var haem3 = new haem1Proto.constructor('햄햄3');        // { name: '햄햄3' } true
var haem4 = new haem1.__proto__.constructor('햄햄4');   // { name: '햄햄4' } true
var haem5 = new haem1.constructor('햄햄5');             // { name: '햄햄5' } true

[haem1, haem2, haem3, haem4, haem5].forEach(function (haem) {
    console.log(haem, haem instanceof Haem);
});