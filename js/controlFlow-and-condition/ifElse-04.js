// -if else

let age = prompt("What is your age")

// if (age >= 10 && age <= 40) {
//     console.log("yes sir, you are eligible for the driving license, here is your form")
// } else {
//     console.log("sorry sir, you are not eligible. please come next year")
// }



// -if else-if else


if (age >= 18 && age <= 70) {
    console.log("Yes sir, you are eligible for the SIM card. Here is your form.")
}
else if (age < 18) {
    console.log("Sorry sir, you are underage. We can't provide you a SIM card.")
}
else {
    console.log("Sorry sir, your age is above the eligible limit for the SIM card.")
}