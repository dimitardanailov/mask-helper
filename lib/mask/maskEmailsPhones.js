const maskEmails = require('./maskEmails')
const maskPhones = require('./maskPhones')

module.exports = function maskEmailsPhones(input) {
	let output = input

	output = maskEmails(output)
	output = maskPhones(output)

	return output
}