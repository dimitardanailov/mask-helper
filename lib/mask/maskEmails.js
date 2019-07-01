const mask = require('./index')
const findEmails = require('../regExp/emails')

module.exports = function maskEmails(input) {
	const emails = findEmails(input)
	const localPartIndex = 1
	const domainIndex = 4

	let output = input

	emails.forEach(email => {
		const replacement = mask(email, localPartIndex, domainIndex)
		output = output.split(email).join(replacement)
	})

	return output
}