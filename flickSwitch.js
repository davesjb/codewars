function flickSwitch(arr){
  
  let arrayTrueFalse = [];
  
  let switchArray = true;
  
  for (let i = 0; i < arr.length; i++)
    
    if(arr[i] === "flick"){
      if (switchArray === true){
        switchArray = false;      
        arrayTrueFalse.push(switchArray);
      } else if (switchArray === false){
        switchArray = true;      
        arrayTrueFalse.push(switchArray);
      }
      console.log("i", arrayTrueFalse)
      
    } else {
      
      
      
      arrayTrueFalse.push(switchArray);
      
    }
  
  console.log(arrayTrueFalse);
    
  return arrayTrueFalse;
}

// Other solutions:

function flickSwitch(arr){
    let returning = true;
      return arr.map( (v) => {
        return (v === "flick") ? returning = !returning : returning;
      })
  }



function flickSwitch(arr){
let flag = true
for(let i = 0; i < arr.length; i++){
    if(arr[i] == 'flick'){
    flag == false ? flag = true : flag = false
    } 
    arr[i] = flag
}
return arr
}
