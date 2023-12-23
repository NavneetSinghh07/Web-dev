const change = document.querySelectorAll(".box");

// change[0].innerText = "This is Div 1";

for(let i =0; i<5; i++){
    change[i].innerText=("This is div " + i);
    change[i].style.color="red";
}

// let newbtn = document.createElement("Button");
// newbtn.innerText="Click me";
// document.body.appendChild(newbtn);

// Homework


let newbtn = document.createElement("Button");
newbtn.innerText="Click me";

newbtn.style.backgroundColor="red";
newbtn.style.color="white";
document.querySelector("body").prepend(newbtn);

let para = document.createElement("p");
para.setAttribute("ClassName","paragraph");
para.innerHTML="Hello my name is <em> Navneet </em>"
document.body.appendChild(para);

para.style.height= "100px";
para.style.border="5px solid black";
para.style.textAlign="Center";

let a = function(n1, n2){

    console.log(n1);
    console.log(result);
}

a('devsnest', result );