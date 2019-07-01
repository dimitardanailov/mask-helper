import { findEmails } from './lib/regExp/emails'
import mask from './lib/mask'
import './lib/strings'

const text = `
hey dude, maybe you can contact me later by email or phone.
here is my 
company email: john.t@example.com 
personal email: my.email@gmail.com
phone: 08123123123`

const emails = findEmails(text)
const localPartIndex = 1
const domainIndex = 4

let output = text

emails.forEach(email => {
	const replacement = mask(email, localPartIndex, domainIndex)
	output = output.replaceAll(email, replacement)
})

console.log('*** Output ***')
console.log(output)

