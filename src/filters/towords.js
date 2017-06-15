import converter from 'number-to-words'

function toWords (value) {
  return converter.toWords(value + 0)
}

export default toWords
