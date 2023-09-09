function spinWords(string) {
	return string
		.split(' ')
		.map(w => {
			if (w.length >= 5) {
				return w.split('').reverse().join('');
			} else {
				return w;
			}
		})
		.join(' ');
}

console.log(spinWords('Hey fellow warriors'));
