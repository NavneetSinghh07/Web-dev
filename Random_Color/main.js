// document.addEventListener("DOMContentLoaded", function(){
//     let a = {};
//     a.name = "Navneet Singh";
//     a.number = 1234;
//     a.section = "K22AM";
//     console.log(`Student with name ${a.name} and number ${a.number} is studying in section ${a.section}`);

//     let stuprototype= {}
//     let student = Object.create(stuprototype);
//     student.name = "Navneet Singh";
//     console.log(student.name);
//     console.log(stuprototype);
//     function child(name,number,section)
//     {
//         this.name=
//         this.number = 12345;
//         this.section = "K22AM";
//     }

//     function myFunction(){
//         const message = document.getElementById("demo").Value;
//     }
// })



const getColor = () => {
    //hex codes
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomNumber, randomCode);

    // changing body color on click
    document.body.style.backgroundColor = randomCode;

    // printing color code on ui
    document.getElementById("color-code").innerText=randomCode;
    document.getElementById("color-code").style.color=randomCode;

    navigator.clipboard.writeText(randomCode);
}


//event call
document.getElementById("btn").addEventListener("click", getColor);


//initial call
getColor();
