var NewConstructor = function () {
    console.log('this is new constructor~');
};

var datatypes = [
    1,              // Number & false
    'haem',         // String & false
    true,           // Boolean & false
    {},             // newConstructor & false
    [],             // newConstructor & false
    function () {}, // newConstructor & false
    /haem/,         // newConstructor & false
    new Number(),   // newConstructor & false
    new String(),   // newConstructor & false
    new Boolean(),  // newConstructor & false
    new Object(),   // newConstructor & false
    new Array(),    // newConstructor & false
    new Function(), // newConstructor & false
    new RegExp(),   // newConstructor & false
    new Date(),     // newConstructor & false
    new Error()     // newConstructor & false
];

datatypes.forEach(function (d) {
    d.constructor = NewConstructor;
    console.log(d.constructor.name, '&', d instanceof NewConstructor);
});