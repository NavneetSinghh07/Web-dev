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

// rest operator 

const {firstName : name, ...remaining} = anotherPerson;
console.log(name, remaining);

const{ app, ...rem} = fruits;
console.log(app, rem);

// spread operator;










