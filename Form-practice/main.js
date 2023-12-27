// console.log(document.getElementById("username").value)
// console.log(document.getElementById("password").value)



document.querySelector('form').addEventListener("submit", function(event){
    const form = event.target;
    event.preventDefault();
    console.log(form.email.value);
    console.log(form.username.value);
    console.log(form.password.value);
    // console.log(form.mobileNumber.value);
})

document.getElementById("email").addEventListener("input",function(event){
    const element = event.target;
    if(element.validity.typeMismatch){
        element.setCustomValidity("Enter Valid na")
        element.reportValidity();
    }else{
        element.setCustomValidity();
    }
})

document.addEventListener("click", function(a){
    console.log(document.getElementById("outside").value);
})
