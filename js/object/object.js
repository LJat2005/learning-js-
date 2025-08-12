let profile = {}
let profile1 = new Object()

let name = {
    firstName: "Lokesh"
}


//adding new key and value in object   ADDING
name.lastName = "Jat"
name.age = 19

//updating existing value             UPDATE
name.age = 20

//deleting property from object        DELETE
delete name.age

//access or read the value             READ
console.log(name.firstName)

//to get all the values from an object
console.log(Object.keys(name))


//to get all the values from an object
console.log(Object.values(name))

//to get all the keys and values in nested array format
console.log(Object.entries(name))



for (let key in name) {
    console.log(key + " : " + name[key])
}
console.log(name)

let data = [
    { name: "sween", age: 24 },
    { name: "lokesh", age: 26, address: { home: "b-12, 1st avemue", office: "b-12, 2nd avenue" } },
    { name: "banwar", age: 25 }]


// console.log(data[1].address.office)
// console.log(data[1].address["office"])


// function revreseName(name){
// }
// revreseName("sween")
