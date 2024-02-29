// for(let i1 = 1; i1<=10; i1++){
//   console.log(i1);
// }

// let firstName = "Navneet";
// for(let index = 0; index < firstName.length; index++){
//   console.log(firstName.charAt(index));
// }

// const fruit = ["Apple", "Mango", "Kiwi"]
// console.log(fruit[0]);
// console.log(fruit.length);

// const abc = [1,5,7];
// abc[1] = 3;
// abc;




// var g = 0;
// arr = [1,2,3,4,5];

// for( ind = 0; ind<arr.length; ind++){
//   g += arr[ind];
// }

// console.log(g);

// Some questions


numbers = [1,2,3,4,5,6];

evenNum = [];
oddNum = [];

for(index = 0; index < numbers.length; index++){
  if (numbers[index]%2 == 0){
    evenNum.push(numbers[index]);
  }else{
    oddNum.push(numbers[index]);
  }
}

console.log(evenNum);
console.log(oddNum);