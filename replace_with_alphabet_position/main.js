function alphabetPosition(text) {
	return String(text)
		.toLowerCase()
		.split('')
		.filter(item => /[a-z]/g.test(item))
		.map(item => item.charCodeAt(0) - 96)
		.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
