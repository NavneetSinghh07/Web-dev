document.querySelector('form').addEventListener("submit", function(event){
    const form = event.target;
    console.log(form.Email.value);
    console.log(form.username.value);
    console.log(form.password.value);
    console.log(form.mobileNumber.value);
})

document.addEventListener("click",function(){
    console.log(document.getElementById("outside").value);
})

document.getElementById("email").addEventListener('input', function(event){
    const element = event.target;
    if(element.validity.typeMismatch){
        element.setCustomValidity("Enter Email address");
        element.reportValidity();
    }else {
        element.setCustomValidity("");
    }

})