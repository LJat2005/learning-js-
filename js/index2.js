let Result = prompt("Enter your Marks");

if (Result > 100) {
    console.log("please enter valid digits")
}
else if (Result >= 90) {
    console.log("congratulation your grade is A+")
}
else if (Result >= 60) {
    console.log("congratulation your grade is B")
}
else if (Result >= 33) {
    console.log("congratulation your grade is C")
}
else{
console.log("congratulations you fail")
}