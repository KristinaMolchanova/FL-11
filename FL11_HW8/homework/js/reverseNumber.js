function reverseNumber(numb) {
    numb = numb.toString();
    let newNumb = '';
    if (numb === '') {
        return;
    } else {
        if (numb[0] === '-') {
            newNumb = numb[0];
        }
        for (let i = numb.length - 1; i >= 0; i -= 1) {
            if (numb[i] === '-' || numb[i] === '0') {
                newNumb += '';
            } else {
                newNumb += numb[i];
            }
        }
        return console.log(newNumb);
    }
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);