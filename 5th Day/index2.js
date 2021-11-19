// Create a function that will return children, teenagers, young people, old people from the age

function ageVariation (a){

    if( a>=0 && a<=7){
        console.log("You are Children")
    }
    else if( a>=8 && a<=19){
        console.log("You are a Teenager")
    }
    else if( a>=20 && a<=35){
        console.log("You are a Young people")
    }
    else {
        console.log("You are a old")
    }
  
  }
  let age=parseInt(prompt("please Type your age"));
  
  console.log(ageVariation(age));