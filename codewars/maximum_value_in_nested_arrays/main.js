function findNestedMaximum(arr) {
	let narr = [...arr];

    // narr = flatten(narr);
    narr = narr.flat(10);
    narr.sort((a, b) => a - b);

	return narr[narr.length - 1];
}


// function flatten(arr) {
//     return arr.reduce(function (flat, toFlatten) {
//         return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
//     }, []);
// }

console.log(findNestedMaximum([4, -3, [10], [[[[-5, 19], 6, 7], 6], 18]]));
