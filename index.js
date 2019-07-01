import maskEmails from './lib/mask/maskEmails';

const text = `
hey dude, maybe you can contact me later by email or phone.
here is my 
company email: john.t@example.com 
personal email: my.email@gmail.com
phone: 08123123123`

const output = maskEmails(text)

console.log('*** Output ***')
console.log(output)

