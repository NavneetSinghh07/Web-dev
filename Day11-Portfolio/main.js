
const dynamicContent = document.getElementById("dynamic-text");
console.log(dynamicContent);

let statement = "Web Developer...";

let index = 0;

const typeWriter = function(){
    let new_title = statement.slice(0,index);

    dynamicContent.innerText = new_title;
    index>statement.length ? index=1: index++
    // index++;
    setTimeout(function(){
        typeWriter();
    }, 100);
}

typeWriter(statement);