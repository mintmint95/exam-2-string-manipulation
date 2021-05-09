function countMultipleKeywords(keywords, sentence) {
  let count = 0
  for (let i = 0; i < keywords.length; i++) {
    const globalRegex = new RegExp(`${keywords[i]}`, 'g')
    const result = sentence.match(globalRegex)
    count += result.length
  }
  return count
}

module.exports = countMultipleKeywords