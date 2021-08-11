module.exports = function extractEmails(text) {
	const regExp = new RegExp('[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+', 'gm')
	const emails = []
	let matches

	while(matches = regExp.exec(text)) {
		emails.push(matches[0])
	}

	return emails
}