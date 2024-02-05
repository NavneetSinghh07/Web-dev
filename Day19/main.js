function person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

let jane = new person("John", "Doe");
console.log(jane);

let pradeep = new person("Pradeep", "Kumar");
console.log(pradeep);

person.prototype.printName = function(){
    return this.firstname + " " + this.lastname;
}


console.log(jane.printName());
console.log(pradeep.printName());


let firstSet = [1,3,5,6,7,9];
let secondSet = [2,4,6,8,10];

console.log(firstSet);
console.log(secondSet);

Array.prototype.evenNumbers = function(){
    return this.filter(function(item){
        return item%2 === 0
    })
}

console.log(firstSet.evenNumbers())
console.log(secondSet.evenNumbers())

firstSet.evenNumbers()

// Call by value, call by reference 

let a = 2;
let b=a;
console.log(a);
console.log(b);

a=4;
console.log(a);

// object.create

let org = {org:"Devsnest"};
console.log(Object.create(org, {name: {value:"Nav"}}));



