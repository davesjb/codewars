

// let x = [1, 2, 3]

function maps(x){
  
    let doubled = [];
  
    for (let i = 0; i < x.length; i++ ){
      let result = x[i] * 2; 
  
      console.log("result", result);
      
      doubled.push(result);
    }
    
    return doubled; // Return the modified array
  }
  


// solutions:

function maps(x){
    return x.map(n => n * 2);
  }


  function maps(x){
    //return x.map(el => el * 2);
    let arr = [];
    for(let i = 0; i < x.length; i++){

        arr.push(x[i] * 2);

    }
    return arr;
    }