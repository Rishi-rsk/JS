const name= "rishi"
const repocount = 10
// console.log(name+repocount+"value")
console.log(`hello my name is ${name} and my repo count is ${repocount}`)
const gameName= new String("srishti-mine")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(0))
console.log(gameName.indexOf('t'))

const newSting = gameName.substring(0,4)
console.log(newSting)

const anotherString = gameName.slice(-7,5)
console.log(anotherString)

const newStingone = "   rishi   "
console.log(newStingone)
console.log(newStingone.trim())
const url = "https:/rishi .com"
console.log(url.replace(' ',''))

console.log(url.includes('rishi'))
