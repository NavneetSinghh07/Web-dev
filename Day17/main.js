var a = 2; //Global variable
function printMe(){
    var b = 3; //local variable
    console.log(a);
}

printMe();
console.log(a);

// Execution context is in 2 phases
// CREATION PHASE : loads variables and function in memory 
// Execution Phase : executes the statement line by line 


var somevariable = "devsnest";

console.log(somevariable); 
somefunction();

function somefunction(){
    console.log("somefunction : ", somevariable); 
}

console.log(somevariable); 


var myName = 'NAVNEET'; //Global var

function printName(){
    console.log(myName);
    printAnotherName();
}

function printAnotherName(){
    var myName = "John"; //local var
    console.log(myName);
    printSomeAnotherName();
}

function printSomeAnotherName(){
    var myName = "Jane"; //local var
    console.log(myName);
}

console.log(myName);
printName();