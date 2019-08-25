'use strict'

function assign(proto) {
    function Func() {
        return this;
    }
    Func.prototype = {
        ...proto
    };
    return new Func();
}

const defaults = {
    a: 123,
    b: 777
};
const options = {
    a: 456
};
const configs = assign({}, defaults, options); // => {a: 456, b: 777}
console.log(configs);