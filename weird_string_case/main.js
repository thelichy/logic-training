function toWeirdCase(str) {
	return str
		.split(' ')
		.map(item =>
			item
				.split('')
				.map((c, i) => (i % 2 == 1 ? c.toLowerCase() : c.toUpperCase()))
				.join('')
		)
		.join(' ');
}

console.log(toWeirdCase('This is a test'));
