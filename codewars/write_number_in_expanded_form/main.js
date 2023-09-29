function expandedForm(num) {
	return num
		.toString()
		.split('')
		.reverse()
		.map((c, i) => c.padEnd(i + 1, '0'))
        .filter(c => c[0] != '0')
        .reverse()
		.join(' + ');
}

console.log(expandedForm(70304));
