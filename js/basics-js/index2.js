let result = prompt("Enter your Marks");

if (result > 100) {
    console.log("please enter valid digits")
}
else if (result >= 90) {
    console.log("congratulation your grade is A+")
}
else if (result >= 60) {
    console.log("congratulation your grade is B")
}
else if (result >= 33) {
    console.log("congratulation your grade is C")
}
else{
console.log("congratulations you are fail")
}