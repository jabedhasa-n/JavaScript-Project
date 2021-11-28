// Create a BMI function for health


//   bmi weidght/height**2
// weight =Kg

// height =m


function bmical(w,h){
    //    return `${w/(h**2)}`;
       return (w/(h**2));
    //    return w/(h**2);
    }
    
    let  weight= parseInt(prompt("Please Type your weight (kg)"));
    let height= parseInt(prompt("Please Type your height(m)"));
    
    console.log(bmical(weight,height));
    
    