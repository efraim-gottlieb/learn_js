const arr = []
for (let i = 1; i <= 10; i++){
  arr.push(i)
  arr.unshift(i)
}

arr.pop()
arr.shift()

console.log(arr.length)
arr.