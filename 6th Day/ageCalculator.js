// hing
// Create an age calculator function


let MainFunction=function(){


    this.birthYear=(year)=>{
        return `Your age is now ${2021-year} years old`;
    }
}


let year=parseInt(prompt("please Type your Birth Year"));

let lead_Function=new MainFunction();

console.log(lead_Function.birthYear(year));

