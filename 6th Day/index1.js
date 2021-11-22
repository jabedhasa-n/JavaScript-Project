//Create a function that will return children, teenagers, young people, old people from the age

yourName=prompt("please Type your Name");
age=parseInt(prompt("please Type your Age"));

let MainFunction = function (){

    this.agecalculor =(age)=>{
        if(age>=0 && age<=8){
            return `your name is ${yourName} and you are children`;
        }
        else if(age>=9 && age<=19){
            return `your name is ${yourName} and you are teenagers`;
        }
        else if(age>=20 && age<=35){
            return `your name is ${yourName} and you are teenagers`;
        }
        else{
            return `your name is ${yourName} and your are old`
        }
    }

}

let lead_function= new MainFunction();

console.log(`${lead_function.agecalculor(age)}`);



