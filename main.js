function palindrome(str) {
	str = str.toLowerCase();
	let reversed = str.split('').reverse().join('');

	if (reversed === str) {
		return true;
	}
	return false
}

console.log(palindrome('Racecar'));