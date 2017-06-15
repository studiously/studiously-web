/**
 *  Capitalizes a string.
 *
 * 'abc' => 'Abc'
 */

function capitalize (value) {
  if (!value && value !== 0) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export default capitalize
