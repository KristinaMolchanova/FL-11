//Task1:

const array = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];

function maxElement() {
    const maxElem = Math.max.apply(null, array);
    return maxElem;
}

//Task2:

const arr = [1, 2, 3];

function copyArray(array) {
    const copy = [...array];
    return copy;
}

//Task3:

const addUniqueId = (obj) => {
    const copiedObj = obj;
    copiedObj.id = Symbol('uniqueId');
    return copiedObj;
}

const obj = addUniqueId({
    name: 123
});

//Task4:

const regroupedObject = (obj) => {
    const {
        name,
        details
    } = obj;
    const {
        id,
        age,
        university
    } = details;
    const newObj = {
        university: university,
        user: {
            age,
            firstName: name,
            id
        }
    }
    return newObj;
}

const oldObj = {
    name: 'Someone',
    details: {
        id: 1,
        age: 11,
        university: 'UNI'
    }
}

//Task5:

const array1 = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1];
const findUniqueElements = (arr) => {
    const set = new Set(arr);
    return arr = [...set];
}

//Task6:
const phoneNumber = '0123456789';
const hideNumber = num => {
    const hiddenNum = num.slice(-4);
    return hiddenNum.padStart(10, '*');
};

//Task7:

function add(a, b) {
    if (arguments.length < 2) {
        throw new Error('Missing property');
    }
    const res = a + b;
    return res;
}