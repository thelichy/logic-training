function rgb(r, g, b) {
    r = r > 255 ? 255 : r
    g = g > 255 ? 255 : g
    b = b > 255 ? 255 : b
    
    r = r < 0 ? 0 : r
    g = g < 0 ? 0 : g
    b = b < 0 ? 0 : b

	return (
		Number(r).toString(16).padStart(2, '0') +
		Number(g).toString(16).padStart(2, '0') +
		Number(b).toString(16).padStart(2, '0')
	).toUpperCase();
}

console.log(rgb(173,255,47));
