
// // MELODY = 2 AND your = 2 ==> 4
// const multipleKeywords = ['MELODY', 'your']

function countMultipleKeywords(keywords, sentence) {
  let count = 0
  for (let i = 0; i < keywords.length; i++) {
    const globalRegex = new RegExp(`${keywords[i]}`, 'g')
    const result = sentence.match(globalRegex)
    count = count + result.length
  }
  return count
}

module.exports = countMultipleKeywords