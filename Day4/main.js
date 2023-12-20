// let num1 = 2;
// let num2 = 4;
// if(num1 > num2){
//     console.log("Num1 is greater");
// }else{
//     console.log("Num2 is greater");
// }

// Making function 

function compareNumbers(firstnum, secondnum){
    if(firstnum > secondnum){
        console.log("firstnum is greater");
    }else{
        console.log("secondnum is greater");
    }   
}

// Calling function 

compareNumbers(2, 5);
compareNumbers(10, 4);

// Function without any parameter

function print(){
    console.log("Print this in console");
}

print();

// Function with operators 

function addNUm(num1, num2){
    return num1 + num2;
}

result = addNUm(3, 6);
console.log(result);

// Function expression 

const add = function addnumber(n1, n2){
    return n1 + n2;
}

const resut = add(3, 5);
console.log(resut);

//Anonymous function

const substract = function(first, second){
    return first - second;
}

console.log(substract(5,2));

//Function inside a object

const sum = {
    firstnum: 3,
    secondnum: 5,
    result: function(NUM1, NUM2){
        console.log(NUM1 + NUM2);
    }
};

sum.result(sum.firstnum, sum.secondnum)












