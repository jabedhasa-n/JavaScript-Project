let txt="My name is jabed"

console.log(txt.toLowerCase())
console.log(txt.toUpperCase())
//string to objext
console.log(txt.split(' '))

console.log(txt.concat( txt))

console.log(txt.startsWith("My"))
//true
console.log(txt.endsWith("jabed"))
//true
console.log(txt.substr(4))

//ame is jabed (substring count space)
console.log(txt.substr(4,3))

//ame
console.log(txt.replace('jabed','salam'))