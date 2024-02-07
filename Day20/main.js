// template literal syntex

const name = "Navneet Singh";
const age = 20;

console.log("Hi my name is " + name + " My age is " + age);
console.log(`Hii my name is ${name} and my ag is ${age>30? "greater than 18": "less than 20" }`);

// shorthand property
let printMe = function(){
    console.log(this.name, this.age);
}

let person = {
    name, age,printMe() {
        console.log(this.name, this.age);
    }
};

console.log(person);

//DESTRUCTING objects

let anotherPerson = {
    firstName: 'Navneet Singh',
    lastName : "Singh",
    address:{
        city:"Unnao",
        state:"U.P"
    }
}

let { firstName, address: {city}, address} = anotherPerson;
console.log(firstName, city, address);

// Destructing arrays

const fruits = ["Apple", "Mango", "Kiwi"];
console.log(fruits[0]);

const[apple, , KIWI] = fruits;
console.log(`Coming from destructive array ${apple}, ${KIWI}`);

// alias

let{firstName: givenName } = anotherPerson;
console.log("alliased as name ", givenName);

// rest operator - it can be used to print the specific value
// It find that keyword in the object or array passed


// const {firstName : name, ...remaining} = anotherPerson;
// console.log(name, remaining);

// const{ app, ...rem} = fruits;
// console.log(app, rem);

const {firstName: namee, ...remaining} = anotherPerson;
console.log(namee, remaining);

const{firstNamee} = anotherPerson;
console.log(firstName);

// spread operator;

const anotherList = ["Strawberry", "Cherry"];
const moreFruits = [...fruits, anotherList];
console.log(moreFruits);
// console.log(anotherPerson);

console.log({...anotherPerson.address, country: "India"});

// arrow functions

function sum(firstNum, secondNum){
    return firstNum + secondNum;
}

let sumArrow = (firstNum, secondNum) => firstNum + secondNum;

let diffArrow = (f1, f2) => {
    let result;
    if(f2>f1){
        result = f2- f1;
    }
    else{
        result = 0;
    }
    return result;
}

// optional chaining
let personn = {
    firstName: "J", lastName: "Singh"
};

// if(personn?.personn.lastName){
//     console.log(personn.lastName);
// }

// nullish coalescing variable

let agee = person.age ?? 20;
console.log(agee);
















