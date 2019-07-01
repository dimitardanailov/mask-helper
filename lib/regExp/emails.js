module.exports = function extractEmails(text) {
	const regExp = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?', 'gm')
	const emails = []
	let matches

	while(matches = regExp.exec(text)) {
		emails.push(matches[0])
	}

	return emails
}