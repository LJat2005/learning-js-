//function declarion

// NOTE: you can execute the fucntion before create

function profile() {
    let firstName = "Lokesh"
    let lastname = "jat"
    console.log(firstName, lastname, "welcome to our website")
}

// profile()


function profiles(){
    let firstName = "Lokesh"
    let lastname  = "jat"
    let age       = 19
    let number    = 123467890
    
    console.log(firstName, lastname, age, number,)
}

profiles()



// function execution, call a function, invoked a function
//a function with two parameters
greet("Lokesh", "jat")
function greet(a, b) {
    console.log(a, b, "welcome to our website")
}










//function expression
let greet3 = function () {
    console.log("welcome to our website")
}

// greet3()


// -ARROW function
let greet4 = () => {
  console.log("greet4 : welcome to our website");
};

//  greet4()
