// function handler(){
//     alert("You have clicked the button");
// }

// document.getElementById("handle").onclick= handler();

// recommended way

// document.getElementById("handle").addEventListener("click", function(){
//     alert("You have clicked the b")
// })

document.addEventListener('DOMContentLoaded',function(){
    
    function handleMouseOver(){
        console.log(event);
    }
    
    document.getElementById("start").addEventListener("click",function handleClick(){
        document.addEventListener("mouseover", handleMouseOver);
    });
    
    document.getElementById("stop").addEventListener("click", function handleClick(){
        document.removeEventListener("mouseover", handleMouseOver);
    })
    
    document.getElementById("username").addEventListener("keypress", function(a){
        console.log(event.key);
        if (event.key== "a"){
            event.preventDefault();
        }
    })
    
    // Focus and blur
    
    document.getElementById("username").addEventListener("focus", function(){
        console.log("Focus is On");
    })
    
    document.getElementById("username").addEventListener("blur", function(){
        console.log("Blur is On");
    })
    
    //How event are captured
    
    document.querySelector(".parent").addEventListener("click", function(){
        console.log("Parent is clicked");
    })
    
    document.querySelector(".child").addEventListener("click", function(){
        console.log("Child is clicked");
    })
    
    document.getElementById("subchild").addEventListener("click", function(event){
        console.log("Sub Child is clicked");
        event.stopPropagation();
    })
    
    // More about event handling
    
    

})
