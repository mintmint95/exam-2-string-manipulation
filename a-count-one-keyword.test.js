const countOneKeyword = require('./a-count-one-keyword.js')

describe('Positive Testing', () => {
  const sentence = 'LINE MELODY provides ringtones, ringback tones for LINE Call colorize your LINE Call experience and express your feelings through LINE MELODY.'
  test('Case:1 Count with keyword as \'LINE MELODY\'', () => {
    const keyword = 'LINE MELODY'
    const result = countOneKeyword(keyword, sentence)
    expect(result).toBe(2)
  })

  test('Case:2 Count with keyword as \'LINE\'', () => {
    const keyword = 'LINE'
    const result = countOneKeyword(keyword, sentence)
    expect(result).toBe(4)
  })

  test('Case:3 Count with keyword as \'ringtones\'', () => {
    const keyword = 'ringtones'
    const result = countOneKeyword(keyword, sentence)
    expect(result).toBe(1)
  })

})
