const heading = document.createElement("h1");

heading.textContent = "This heading is created using dom api";

document.body.appendChild(heading);

const span = document.createElement("span");
span.id = "Imp";
span.className = "blue";
span.textContent = "This content and and span tag is added using DOM Api"
span.style.backgroundColor= "yellow";

heading.appendChild(span);

//USing more attributes

const para = document.createElement("p");

para.setAttribute("id","js-para");
console.log(para.getAttribute("id"));
para.id = "Paragraph";
para.className = "Para";
para.innerHTML = "My name is <strong>Navneet Singh </strong>";
document.body.appendChild(para);

//Adding list

const hobbies = ["Coding", "Swimming", "Jogging"];
const list = document.createElement("ul");

for(let hobby of hobbies){
    list.innerHTML += "<li>" + hobby + "</li>";
}
document.body.appendChild(list);


// document.getElementsByClassName("blue").style.backgroundColor="red";
// get the elements 

console.log(document.getElementById("Imp").textContent);
console.log(document.getElementsByClassName("Para").textContent);
console.log(document.querySelector("h1").textContent);

// to access id using querry selector
console.log(document.querySelector("#Imp"));

document.getElementsByClassName("blue");

const div = document.createElement("div");
div.textContent="hii";
div.id="container";
div.style.backgroundcolor="palevioletred"
div.style.height="75px";
div.style.widht="75px";
document.body.appendChild(div);

const a1 = document.createElement("div");
a1.id="container";
a1.style.backgroundColor="palevioletred";
a1.style.height="75px";
a1.style.widht="75px";
document.body.appendChild(a1);

const a2 = document.createElement("div");
a2.id="container";
a2.style.backgroundColor="palevioletred";
a2.style.height="75px";
a2.style.widht="75px";
document.body.appendChild(a2);

const a3 = document.createElement("div");
a3.id="container";
a3.style.backgroundColor="palevioletred";
a3.style.height="75px";
a3.style.widht="75px";
document.body.appendChild(a3);
// Next

const a4 = document.createElement("div");
a4.id="container";
a4.style.backgroundColor="palevioletred";
a4.style.height="75px";
a4.style.widht="75px";
document.body.appendChild(a4);






