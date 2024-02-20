

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
