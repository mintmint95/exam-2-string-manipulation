function findKeyword(keyword, sentence) {
  const globalRegex = new RegExp(`${keyword}`, 'g')
  const result = sentence.match(globalRegex)
  return result
}

function countOneKeyword(keyword, sentence) {
  return findKeyword(keyword, sentence).length
}

module.exports = countOneKeyword