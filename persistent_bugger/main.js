function persistence(num) {
	let n = 0;
    let count = 0;
    let str = num.toString();

    while (str.length != 1) {
        n = str.split('').reduce((p, c) => p * parseInt(c), 1);
        str = n.toString();
        count++;
    }

    return count;
}

console.log(persistence(999));
