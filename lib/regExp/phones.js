const extractWords = require('./words')

module.exports = function extractPhones(text) {
	const words = extractWords(text)
	const regExp = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
	const phones = []

	words.forEach(word => {
		if (word.match(regExp)) phones.push(word)	
	})

	return phones
}