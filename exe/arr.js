// ======================== 1
const doubleValues = (array) => array.map(element => element*2);
let numbers1 = [1,2,3,4,5,6]
console.log(doubleValues(numbers1))

// ======================== 2
const onlyEvenValues = (array) => array.filter((num) => !(num%2))
let numbers2 = [1,2,3,4,5,6]
console.log(onlyEvenValues(numbers2))

// ======================== 3
const showFirstAndLast = (array) => [array[0] ,array[array.length -1]]
let numbers3 = [1,2,3,4,5,6]
console.log(showFirstAndLast(numbers3))

// ======================== 4
const vowelCount = (array) => {
  let vowel = ['a', 'o', 'e', 'i', 'u']
  let result = {}
  array.split('').forEach((char) => {
    if(vowel.includes(char.toLowerCase())){
      if(result.hasOwnProperty(char)){
        result[char] += 1
      }
      else {
        result[char] = 1
      }
    }
  })
  return result
}
console.log(vowelCount('efraim gottlieb'))

// ======================== 5
const upper = (text) => text[0].toUpperCase() + text.slice(1)
console.log(upper('efraim'))

// ======================== 6
const shiftLetters = (text) => {
  let newText = ''
  text.split('').forEach((char) => {
    newText += String.fromCharCode(char.charCodeAt(0)-1)
  })
  return newText
}
console.log(shiftLetters('bcd'))

// ======================== 7
const swapCase = (text) => {
  let newText = ''
  text.split(' ').forEach((word) => {
    newText += upper(word) + ' '
  })
  return newText
}
console.log(swapCase('efraim gottlieb'))