// Create a BMI function for health


let MainFunction=function(){
    this.bmiIndex=(year)=>{
        let weight=parseInt(prompt("please Type your weight (kg)"))
        let height=parseInt(prompt("please Type your height(m)"))
        return (weight/(height**2));
    }
}
let lead_Function=new MainFunction();

console.log(lead_Function.bmiIndex());


