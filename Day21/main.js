// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve(10_000)
//         reject(new Error("You won't get your money"))
//     }, 3000)
// });

// promise.then((money)=>{
//     if(money==10_000){
//         console.log("I got my money back");
//     }
// }).catch(error =>{
//     console.error(error.message);
// })

let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve(20)
        reject(new Error("Number is not 20"))
    }, 2000)
});

promise.then((number)=>{
    if(number == 20){
        console.log("Number is 20")
    }
}).catch((error=>{
    console.error(error.message);
}))


