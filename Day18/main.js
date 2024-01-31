function add(firstNum){
    return function (secondNum){
        return firstNum + secondNum
    }
}

let addWith = add(5);
console.log(addWith(2));
console.log(addWith(9));

//callback functons

document.addEventListener("click", function(){
    console.log("THIS function gets call back when event occurs");
})


function callMe(fn){
    console.log("I'm done");
    fn();
}


function printText(){
    console.log("hello");
}

callMe(printText);

function printTextWithDelay(text){
    setTimeout(function(){
        console.log(text);
    }, 3000);
}

printTextWithDelay("Printed with delay");


//Functions Objects

function printText(){
    console.log("hello");
}

printText.areYouAnObject = "true";

console.log(printText.name);

let person = {
    firstName: "Navneet",
    lastName: "Singh",
    getName: function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.getName());

function greetPerson(greeting){
    console.log(greeting, this.getName());
}

//BIND method
//Creates a new copy of function that we calling bind

// let greetNavneet = greetPerson.bind(person);
// console.log(greetNavneet());

//CALL
//doesnot create a copy

greetPerson.call(person, "Namaste");


//ARGUMENTS

function sum(){
    let total = 0;
    for (let index=0; index<arguments.length; index++){
        total += arguments[index];
    }
    return total;
}

console.log(sum(2,3,4,5));

//APPLY
greetPerson.apply(person, ["Hello", "another"]);

// function borrowing

let doctor = {
    firstName: "John",
    lastName: "Doe",
}

// function currying

console.log(person.getName.call(doctor));

function logData(date, data){
    console.log(date, data);
}

logData(new Date(),"this is new data to be logged");

let logNow = logData.bind(null, new Date(), 'second');
logNow("this is another info");

//

function add(firstNum){
    return function(secondNum){
        console.log(firstNum + secondNum)
        return firstNum + secondNum
    }
}

add(5)(2);
add(4)(8);

// default values for para

function printSomeText(text = "Navneet"){
    console.log(text);
}

printSomeText();
printSomeText("Hello")

// Object literal syntex

let name = {
    first: "Navneet",
    second: "Singh",
}

let anotherName = new Object();
anotherName.first = "John"
anotherName.last ="Doe";
console.log(anotherName);

// function constructor


function Person(firstName, lastName){
    this.firstName= firstName;
    this.lastName = lastName;
}


let jane = new Person("John", "Doe");
console.log(jane);

let nav = new Person("Navneet", "Singh");
console.log(nav);

// Prototypical inheritance

Person.prototype.printName = function (){
    return this.firstName + ' ' + this.lastName;
}

console.log(nav.printName());
console.log(jane.printName());












