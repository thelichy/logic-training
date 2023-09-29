var uniqueInOrder = function (iterable) {
    if (!iterable[0]) {
        return [];
    }
    
    
    let arr = [iterable[0]];
    for (let i = 1; i < iterable.length; i++) {
        if (iterable[i] != iterable[i - 1]) {
            arr.push(iterable[i]);
        }
    }

    return arr;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder([1,2,2,3,3]));
