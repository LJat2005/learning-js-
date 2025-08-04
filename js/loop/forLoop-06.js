let studentsName = ["ajay","soil","shyam","ram","roshan","rahul",]
let message = "please deposit your fees, which is 1000 Rs."
// console.log(studentsName[2]+ " " + message)

let moneySaving = [100, 200, 300, 400, 500, 600, 700,]





// for loop--

// for(let i = 2; i < 20; i++) {
//     console.log(i)
// }

// for(let i = 10; i > 0; i--) {
//     console.log(i)
// }

// for(let i = 1 ; i <= 10; i++){
//     console.log(2 * i);
// }




for(let i = 0; i < moneySaving.length; i++ ){
    console.log(moneySaving[i] - 50)
}



for(let i = 0; i < studentsName.length; i++){
    console.log(studentsName[i][0].toUpperCase() + studentsName[i].slice(1) + " -> " +message )
}


