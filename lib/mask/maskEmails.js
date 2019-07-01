import mask from './index'
import '../strings'
import { findEmails } from '../regExp/emails'

export default function maskEmails(input) {
	const emails = findEmails(input)
	const localPartIndex = 1
	const domainIndex = 4

	let output = input

	emails.forEach(email => {
		const replacement = mask(email, localPartIndex, domainIndex)
		output = output.replaceAll(email, replacement)
	})

	return output
}