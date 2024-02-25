let result = 1;
let newArray = [];

let x = [1, 2, 3]

function maps(x){

  x.forEach((value)=>{
    result = result * value * 2; 

    console.log(result);
    
    newArray.push(result);
  })
  console.log(newArray);
  return newArray; // Return the modified array
}
