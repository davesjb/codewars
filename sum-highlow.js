// Sum without highest and lowest number

function sumArray(array) {
  
    console.log("array", array)
    
    if(array == null || array.length < 3){
      return 0;
    }
    
  //   const low = Math.min(...array);
  //   const high = Math.max(...array); 
    
    const sortArray = array.sort((a, b)=> a - b);
    
    console.log("sortArray", sortArray)
    
    let slicedArray = sortArray.slice(1, array.length - 1)
    
    let sum = 0;
    
    console.log("slicedArray", slicedArray)
    
    slicedArray.forEach((val)=> {
      console.log(val)
        sum += val;
        
    })
    
    return sum;
  }