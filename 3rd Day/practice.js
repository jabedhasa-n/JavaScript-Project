
let boyAge =prompt("Please type boy's age");
let girlAge =prompt("Please type girl's age");

if (boyAge>=21 && girlAge>=18){
    console.log("Boys age is " + boyAge);
    console.log("girl age is " + girlAge);

   console.log("So , They are capable to marry");
}
else if(boyAge>=21 && girlAge<=18){
    console.log("So , They are are not capable to marry");
    console.log("please boy, you don't need to wait but you finance .....So find out another girl");
    console.log("please girl, you have to wait " +(18-girlAge) + " years");
 }
else if(boyAge<=21 && girlAge>=18){
    console.log("So , They are are not capable to marry");
    console.log("please boy, you have to wait " +(21-boyAge) + " years");
    console.log("please girl, you don't need to wait but you finance ....So find out another boy");
 }
else{
    console.log("So , They are are not capable to marry");
    console.log("please boy, you have to wait " +(21-boyAge) + " years");
    console.log("please girl, you have to wait " +(18-girlAge) + " years");
 };