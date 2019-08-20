'use strict'
'use strict'

function create(proto) {
    function Func() {
        return this;
    }
    Func.prototype = proto;
    return new Func();
}

const obj1 = {
    prop: 5
};
const obj2 = create(obj1);

console.log(Object.getPrototypeOf(obj2) === obj1);
console.log(obj2.prop);