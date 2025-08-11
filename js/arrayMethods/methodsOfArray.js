let names = ["lokesh", "bhanwar", "ajay", "ram", "shyam"]

let profiles = [
    {name: "lokesh", age: 22, mobile:1234567890, score: 50, rollno: 121 },
    {name: "bhanwar", age: 22, mobile:1234567890, score: 50, rollno: 122 },
    {name: "roshan", age: 22, mobile:1234567890, score: 50, rollno: 123 },
];

// console.log(profiles[1].name)


// Map Method
//notes : it will give you a new array
//        you will get all the data from this array

// let mapResult = profiles.map((profile) => {
//     return profile;
// });
// console.log(mapResult)





// FILTER METHOD

// note: you will get a new array,
// this method espeacially for filtering data based on your given condition

// let userRollNo = prompt("what is your roll number?")

// let filterData = profiles.filter((profile) =>{
//     return profile.rollno == userRollNo
// })
// console.log(filterData);




// REDUCE METHODE

let coins = [1, 2, 10, 5, 20, 100, 0, -4,  500, 40, 55, 66];

let reduceData = coins.reduce((acc,curr) => {
 return acc = acc + curr;
});


// let count = 0
// count = count + 1
// count = count + 2
// count = count + 5


// console.log(count)
console.log(reduceData);



// SORT ARRAY

let name = "shabir"
console.log(name.split("").reverse().join(""))


