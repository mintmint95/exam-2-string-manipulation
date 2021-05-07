function reverseAlphabet(sentence) {
  let words = sentence.split(' ')
  let result = ''

  for (let w = 0; w < words.length; w++) {
    let characters = words[w].split('')
    let temp = []
    let special = []
    for (let i = 0; i < characters.length; i++) {
      const regex = /[a-zA-Z0-9]/g
      const isNormalCharacter = characters[i].match(regex) !== null
      if (isNormalCharacter) {
        temp.push(characters[i])
      } else {
        special.push({
          index: i,
          special: characters[i]
        })
      }

      if (i === characters.length - 1) {
        temp.reverse()
        if (special.length > 0) {
          for (const s of special) {
            temp.splice(s.index, 0, s.special)
          }
        }
        if (w === words.length - 1) {
          result += temp.join('')
        } else {
          result += temp.join('') + ' '
        }
      }
    }
  }
  return result
}

module.exports = reverseAlphabet
