function strCount(str, letter){  
  //code here
  
  let count = 0;
  
   for (let i = 0; i < str.length; i++){
     
     if(str[i] == letter){
       count++;
       
     }
    console.log("count", count);
    console.log("str", str);
    console.log("letter", letter);
     
      
   }
  
 return count;
}


// Other solutions

const strCount = (str, letter) => str.split(letter).length -1;
