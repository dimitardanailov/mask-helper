const extractPhones = require('../regExp/phones')
const mask = require('./index')

module.exports = function maskPhones(input) {
	const phones = extractPhones(input)
	const localPartIndex = 1
	const domainIndex = 0

	let output = input

	phones.forEach(phone => {
		const replacement = mask(phone, localPartIndex, domainIndex)
		output = output.split(phone).join(replacement)
	})

	return output
}
