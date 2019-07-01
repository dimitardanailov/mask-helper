export default function mask(string) {
	const length = string.length - 1

	return string.split('').map((character, i) => {
		if (i === 0 || i === length) return character

		return '*'
	})
}