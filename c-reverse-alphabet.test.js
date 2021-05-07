const reverseAlphabet = require('./c-reverse-alphabet.js')


describe('Positive Testing', () => {

  test('Case:1 Reverse alphabet order except special characters in case full sentence', () => {
    const sentence = 'LINE MELODY provides ringtones, ringback tones for LINE Call colorize your LINE Call experience and express your feelings through LINE MELODY.'
    const result = reverseAlphabet(sentence)
    expect(result).toBe('ENIL YDOLEM sedivorp senotgnir, kcabgnir senot rof ENIL llaC eziroloc ruoy ENIL llaC ecneirepxe dna sserpxe ruoy sgnileef hguorht ENIL YDOLEM.')
  })

  test('Case:2 Reverse alphabet in case special characters is in the last character', () => {
    const sentence = 'LINE, MELODY*'
    const result = reverseAlphabet(sentence)
    expect(result).toBe('ENIL, YDOLEM*')
  })

  test('Case:3 Reverse alphabet in case special characters is in the the first character', () => {
    const sentence = '+LINE +MELODY'
    const result = reverseAlphabet(sentence)
    expect(result).toBe('+ENIL +YDOLEM')
  })

  test('Case:4 Reverse alphabet in case special characters is in the the center character', () => {
    const sentence = 'LI-NE ME:LODY'
    const result = reverseAlphabet(sentence)
    expect(result).toBe('EN-IL YD:OLEM')
  })

  test('Case:5 Reverse alphabet in case special characters is emoji', () => {
    const sentence = '💚LINE MELODY💚'
    const result = reverseAlphabet(sentence)
    expect(result).toBe('💚ENIL YDOLEM💚')
  })

})