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

