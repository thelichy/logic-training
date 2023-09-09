function countSmileys(arr) {
	return arr.join(' ')?.match(/[:;]([-~]|)[D)]/g)?.length ?? 0;
}

console.log(countSmileys([':)',':(',':D',':O',':;']));
