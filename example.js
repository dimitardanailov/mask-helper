const maskEmailsPhones = require('./lib/mask/maskEmailsPhones')

const text = `
hey dude, maybe you can contact me later by email or phone.
here is my 
company email: john.t@example.com 
personal email: my.email@gmail.com

My phone numbers are: +62811203898, 0818702203, +62217458592

Phone numbers: 
- +62811203898
- 0818702203
- +62217458592

Fake telephone: 088`

console.log('*** Output ***')
const output = maskEmailsPhones(text)
console.log(output)