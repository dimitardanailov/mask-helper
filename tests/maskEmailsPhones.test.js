const assert = require('assert')
const maskEmailsPhones = require('../index')

const input = `
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

const output = `
hey dude, maybe you can contact me later by email or phone.
here is my 
company email: jo***********e.com
personal email: my***********l.com

My phone numbers are: +62********8, 08*******3, +62********2

Phone numbers: 
- +62********8
- 08*******3
- +62********2

Fake telephone: 088`

it('output string has valid masks', () => {
	assert.equal(output, maskEmailsPhones(input))
})