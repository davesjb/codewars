function grow(x){

  
  let result = 1;
  
  for (i = 0; i < x.length; i++){
    result = result * x[i];
  }
  
//   x.forEach((value)=>{
//     result = result * value;
//   })

  
  return result;
}