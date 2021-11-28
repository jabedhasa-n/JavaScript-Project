// Create a function that will return the area of a rectangle, square, triangle


let MainFunction=function(){

    this.angleFunction=(type)=>{

        if(type=="r"){
            let length=parseInt(prompt("please Type you Length"))
            let height=parseInt(prompt("please Type you Length"))
            return length*height;
        }
        else if(type=="s"){
            let length=parseInt(prompt("please Type you Length"))
            return length*length;
        }
        if(type=="t"){
            let length=parseInt(prompt("please Type you Length"))
            let height=parseInt(prompt("please Type you Length"))
            return 0.5*length*height;
        }
    }
}


let angleName=prompt("please Type angle aria(r,s,t");

let lead_function= new MainFunction();
console.log(`${lead_function.angleFunction(angleName)}`)