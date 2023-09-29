/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = s => {
	s = s
		.normalize('NFD')
		.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')
		.toLowerCase();
	const l = Math.round(s.length / 2);
	for (let i = 0; i < l; i++) if (s[i] != s[s.length - 1 - i]) return false;
	return true;
};

// isPalindrome = s => {

//     let left = 0, right = s.length - 1;

//     while (left < right) {
//         if (s[left].match(/[^0-9a-z]/i)) {
//             left++;
//         }
//         else if (s[right].match(/[^0-9a-z]/i)) {
//             right--;
//         }

//         if (s[left].toLowerCase() != s[right].toLowerCase() ) {
//             return false;
//         }

//         left++;
//         right--;
//     }

//     return true;
// }
