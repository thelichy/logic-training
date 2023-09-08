Array.prototype.toString = function () {
	let str = '';
	this.forEach(it => {
		if ((isNaN(it) && !Array.isArray(it)) || !it.toString().trim()) {
			it = `'${it}'`;
		}

		str += ',' + it;
	});

	str = str.substring(1);
	return `[${str}]`;
};
