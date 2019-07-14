function addOne(x) {
    return x + 1;
}

function pipe(n, ...args) {
    for (let i = 0; i < args.length; i += 1) {
        n = args[i](n);
    }
    return console.log(n);
}

pipe(1, addOne);
pipe(1, addOne, addOne);