// Create a currency converter function from taka to USD, CAD, POUND, EURO etc

let MainFunction=function(){
    // this.amount=parseInt(prompt("please Type your Bd ammount"))
    // this.type=prompt("please Type your convert currency(USD, CAD, POUND, EURO)");
    
    this.currencyFunction=(amount,type)=>{
        if(type=="USD"){
            return amount/85;
        }
    }
    this.currencyFunction=(amount,type)=>{
        if(type=="CAD"){
            return amount/95;
        }
    }
    this.currencyFunction=(amount,type)=>{
        if(type=="POUND"){
            return amount/112;
        }
    }
    this.currencyFunction=(amount,type)=>{
        if(type=="EURO"){
            return amount/97;
        }
    }
   
}

amount=parseInt(prompt("please Type your Bd ammount"))
type=prompt("please Type your convert currency(USD, CAD, POUND, EURO)");
let lead_Function=new MainFunction();

console.log(lead_Function.currencyFunction(amount,type));