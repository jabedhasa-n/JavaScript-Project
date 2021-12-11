
function mulcal (a,b,c){
	if (a =='t'){
    	 return  0.5*b*c;
    }
     else if (a == 's' ){
    	return b*c;
    }
    else if (a == 'r'){
    	return b*c;
    }

}

let abc = prompt("What you want to find:");
let lenth = parseInt(prompt("Enter your lenth:"));	
let height = parseInt(prompt("Enter your height:"));


console.log(mulcal(abc,lenth,height));