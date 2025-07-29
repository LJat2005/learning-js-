// data types in js
//---------------------------------primitive data types 7--------------------------------
//1. String
//2. Number
//3. BigInt 
//4. Boolean      true or false
//5. undefined
//6. null
//7. Symbol
//.........................................................................................

//1. String
let firstname = "Lokesh"
let lastname = "Choudhary"
// console.log()


//2. Number
let Mnumber = 100
let age = 19
// console.log()

//3. BigInt 
let AadharcardNumber = BigInt(8765432123789)
let pancardNumber = BigInt(1238935678949)
// console.log()



//4. Boolean  
let a = 10
let b = 11
// console.log()

let result = a < b
// let result = a == b
let marriedStatus = false
// console.log()



//5. undefined
let name    //undefined
let email  //undefined
// console.log()

//6. null
let AadhatNumber = null
let panNumber = null
// console.log()

//7. Symbol













//---------------------------------------Non-Primitive data type 3--------------------------
//1. Array []
//2. Object {}
//3. functions 


//1. Array [] 
let Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
let fruitsname = ["Apple", "Banana", "Orange", "mango"]
// fruitsname.push("")
// console.log(fruitsname)


//2. Object {}

let fullBio = {
    Name: "Ram",
    age: "20",
    number: 1234567890,
    Address: "Shyamnagar",
}
// console.log(fullBio)




//----operator in js  

//A. Airthmetic operator in js....\/

let addition = 5 + 5                    //10
let sub = 10 - 5                         //5
let mul = 2 * 7                         //14
let div = 16 / 2                        //8
let remainder = 20 % 3                 //2

// console.log(remainder);



//...comparison operator...\\
// greater than            >
// less than               <
// doubleEqual             ==
// tripleEqual             ===
// notEqual                !=




console.log(5 == 6)                   //false
console.log("ram" == "ram")           //true 
console.log(2 < 5)                   //true
console.log(20 > 50)                   //false    

console.log(5 == "5")                 //true     
console.log("5" === 5)                //false     

console.log(10 != 5)                  //true
console.log(10 != 10)                 //false 

console.log(10 >= 10)                 //true
console.log(20 <= 21)                 //true


// Logical operator in js \\

// &&  And operator \\
// || OR operator \\


// &&  And operator\\
console.log(10 === 10 && 2 < 4);                //true



// || OR operator \\

console.log(10 === 11 || 2 < 4);                 //true