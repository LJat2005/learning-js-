//String 

let name = "RAM"
let lastname = 'kumar'
let fullname = `Ram,Kumar`

//method of string 

console.log(fullname.length)

// let stringTrim = name.trim() 

console.log(fullname.toUpperCase())
console.log(fullname.toUpperCase())

console.log(fullname.charAt(8))
console.log(lastname.indexOf("k"))

console.log(lastname.substring(0, 5))
console.log(name.slice(0, 4))

console.log(fullname.replace("kumar", "sharma"))
console.log(lastname.replaceAll("a", "e"))
console.log(fullname.split(","))