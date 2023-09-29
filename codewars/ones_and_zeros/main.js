const binaryArrayToNumber = arr => {
    let result = 0;
    arr.reverse();

    for (let i in arr) {
        if (arr[i] == 1) {
            result += Math.pow(2, (parseInt(i)));
        }
    }

    return result;
};

console.log(binaryArrayToNumber([0,0,1,0]));
