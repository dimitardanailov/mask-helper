module.exports = function extractWords(text) {
	const regExp = /\b[^\s\n]+\b/g
	const words = []
	let matches

	while(matches = regExp.exec(text)) {
		words.push(matches[0])
	}

	return words
}