// // Create a function that will return the area of a rectangle, square, triangle


function area(a){
    
   if(a=="rectangle"){
       let b = parseInt(prompt("pleas Type your length"));
       let c = parseInt(prompt("pleas Type your height"));
       return b*c;
   }
   else if(a=="square"){
      b = parseInt(prompt("pleas Type your length"));
       return b*b;
   }
  else if(a=="triangle"){
        b = parseInt(prompt("pleas Type your length"));
         c = parseInt(prompt("pleas Type your height"));
        return .5*b*c;
   }
   else{
       console.log("please type agin")
   }
}

let areaType = prompt("pleas Type your are (like rectangle, square, triangle)");
console.log(area(areaType));