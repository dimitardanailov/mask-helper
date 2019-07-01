module.exports = function mask(string, localPartIndex, domainIndex) {
	const length = string.length - 1

	const arr = string.split('').map((character, i) => {
		if (i <= localPartIndex || length - domainIndex <= i) return character

		return '*'
	})

	return arr.join('')
}