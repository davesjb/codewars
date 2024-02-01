function sumArray(array) {
  
    console.log(array)
    
    if(array == null || array.length < 3){
      return 0;
    }
    
  //   const low = Math.min(...array);
  //   const high = Math.max(...array); 
    
    let sortArray = array.toSorted();
    
    let slicedArray = sortArray.slice(start,end)
    
    let sum = 0;
    
    
    console.log(high)
    
    array.sort((val)=>{
      
    }
      
    array.forEach((val)=>{
      
       if(val !== low && val !== high)  {
        sum += val;
        
      } 
    })
    
    return sum;
  }