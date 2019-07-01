const maskEmails = require('./lib/mask/maskEmails')

const text = `
hey dude, maybe you can contact me later by email or phone.
here is my 
company email: john.t@example.com 
personal email: my.email@gmail.com

My phone numbers are: 
- +62811203898
- 0818702203
- +62217458592`

const output = maskEmails(text)

console.log('*** Output ***')
console.log(output)

