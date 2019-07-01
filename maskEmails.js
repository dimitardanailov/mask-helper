const extractEmails = require('./lib/regExp/emails')
const mask = require('./lib/mask/index')

module.exports = function maskEmails(input) {
	const emails = extractEmails(input)
	const localPartIndex = 1
	const domainIndex = 4

	let output = input

	emails.forEach(email => {
		const replacement = mask(email, localPartIndex, domainIndex)
		output = output.split(email).join(replacement)
	})

	return output
}