//Function 0:

function getNumbers(str) {
    let array = [];
    for (let i = 0; i < str.length; i += 1) {
        str[i] = Number.parseInt(str[i]);
        if (isNaN(str[i])) {
            array;
        } else {
            array.push(str[i]);
        }
    }
    return console.log(array);
}
getNumbers('string');
getNumbers('n1um3ber95');

//Function 1:

function findTypes() {
    const obj = {};
    for (let i = 0; i < arguments.length; i += 1) {
        const dataType = typeof arguments[i];
        if (dataType in obj) {
            obj[dataType] += 1;
        } else {
            obj[dataType] = 1;
        }
    }
    return console.log(obj);
}

findTypes(null, 'hello', false);

//Function 2:

function executeforEach(arr, cb) {
    for (let i = 0; i < arr.length; i += 1) {
        cb(arr[i]);
    }
}

executeforEach([1, 2, 3], function (el) {
    console.log(el);
});

//Function 3:

function mapArray(arr, cb) {
    let newArray = [];
    executeforEach(arr, function (el) {
        newArray.push(cb(el));
    });
    return console.log(newArray);
}

mapArray([2, 5, 8], function (el) {
    return el + 3
});

// Function 4:

function filterArray(arr, cb) {
    let filteredArr = [];
    executeforEach(arr, function (el) {
        if (cb(el)) {
            filteredArr.push(el);
        }
    });
    return console.log(filteredArr);
}

filterArray([2, 5, 8], function (el) {
    return el > 3
});

// Function 5:

function showFormattedDate(date) {
    let d = date.getDate();
    let m = date.toLocaleString('default', {
        month: 'short'
    });
    let y = date.getFullYear();
    return console.log(`Date: ${m} ${d} ${y}`);
}

showFormattedDate(new Date('2019-04-27T01:10:00'));

// Function 6:

function canConvertToDate(string) {
    let date = new Date(string);
    return console.log(!isNaN(date.valueOf()));
}

canConvertToDate('2016-13-18T00:00:00')
canConvertToDate('2016-03-18T00:00:00')

//Function 7:

function daysBetween(date1, date2) {
    const oneDay = 86400000;
    let diff = Math.abs(date1.valueOf() - date2.valueOf()) / oneDay;
    return console.log(Math.ceil(diff));
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

// Function 9:

function keys(obj) {
    let res = Object.keys(obj);
    return console.log(res);
}

keys({
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
});

//Function 10:

function values(obj) {
    let res = Object.values(obj);
    return console.log(res);
}

values({
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
});