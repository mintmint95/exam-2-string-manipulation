//'LINE MELODY' --> 2
const keyword = 'LINE MELODY'
// //'LINE' --> 4
// const keyword = 'LINE'
// //'Call' --> 2
// const keyword = 'Call'
const sentence = 'LINE MELODY provides ringtones, ringback tones for LINE Call colorize your LINE Call experience and express your feelings through LINE MELODY.'

function findKeyword(keyword, sentence) {
  const globalRegex = new RegExp(`${keyword}`, 'g')
  const result = sentence.match(globalRegex)
  return result
}

function countOneKeyword(keyword, sentence) {
  return console.log(findKeyword(keyword, sentence).length)
}

countOneKeyword(keyword, sentence)