const multipleKeywords = ['LINE', 'Call']
// // MELODY = 2 AND your = 2 ==> 4
// const multipleKeywords = ['MELODY', 'your']
const sentence = 'LINE MELODY provides ringtones, ringback tones for LINE Call colorize your LINE Call experience and express your feelings through LINE MELODY.'

function countMultipleKeywords(keywords, sentence) {
  let count = 0
  for (let i = 0; i < keywords.length; i++) {
    const globalRegex = new RegExp(`${keywords[i]}`, 'g')
    const result = sentence.match(globalRegex)
    count = count + result.length
  }
  return console.log(count)
}

countMultipleKeywords(multipleKeywords, sentence)
