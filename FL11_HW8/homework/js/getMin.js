function getMin() {
    let minElem = 0;
    for (let i = 0; i < arguments.length; i += 1) {
        if (arguments[i] < minElem) {
            minElem = arguments[i];
        }
    }
    return console.log(minElem);
}
getMin(3, 0, -3);