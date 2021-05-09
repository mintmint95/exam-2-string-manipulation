const countMultipleKeywords = require('./b-count-multiple-keywords.js')

describe('Test function countMultipleKeywords', () => {
  const sentence = 'LINE MELODY provides ringtones, ringback tones for LINE Call colorize your LINE Call experience and express your feelings through LINE MELODY.'
  test('Case:1 Count with multiple keywords as \'LINE\' and \'Call\'', () => {
    const multipleKeywords = ['LINE', 'Call']
    const result = countMultipleKeywords(multipleKeywords, sentence)
    expect(result).toBe(6)
  })

  test('Case:2 Count with multiple keywords as \'LINE\' and \'MELODY\' and \'Call\'', () => {
    const multipleKeywords = ['LINE', 'MELODY', 'Call']
    const result = countMultipleKeywords(multipleKeywords, sentence)
    expect(result).toBe(8)
  })

})
