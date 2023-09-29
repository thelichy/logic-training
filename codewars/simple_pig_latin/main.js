function pigIt(str) {
	return String(str)
		.split(' ')
		.map(e => {
			if (!/[a-zA-Z]/g.test(e)) return e;

			e += e[0] + 'ay';
			return e.substring(1);
		})
		.join(' ');
}

console.log(pigIt('Pig latin is cool'));
