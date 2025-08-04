// ---for of loop---

let name = ["ajay", "rahul", "soil", "roshan", "shyam",]

for (let key of name) {
    console.log("your name is", key)
}


let number = [100, 200, 300, 400, 500,]
message = "rupees"

for (let numb of number) {

    console.log(numb + " " + message)
}





// --for in loop-- in 



let profile = {
    name: "lokesh",
    age: 20,
    married: true,
    mobile: 1234567890
}

for (let key in profile) {
    console.log(key + ": " + profile[key])
}


let car = {
    name: "Toyota",
    model: "Innova",
    year: 2022
}

for(let k in car){
    console.log(k +" => " + car[k])
}
