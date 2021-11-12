let yourGender =prompt("Please type Your Gender(Male/Female");

if(yourGender="Male"){
    let boyAge =prompt("Hi Brother,Please type your age");
    let girlAge =prompt("Hi Brother,Please type your Fiance's age");
}

else if(yourGender="male"){
    let boyAge =prompt("Hi Brother,Please type your age");
    let girlAge =prompt("Hi Brother,Please type your Fiance's age");

    if (boyAge>=21 && girlAge>=18){
      console.log("Boys age is" + boyAge);
      console.log("girl age is" + girlAge);
  
     console.log("So , They are capable to marry");
  }
  else if(boyAge>=21 && girlAge<=18){
      console.log("So , They are are not capable to marry");
      console.log("please boy, you don't need to wait but you finance ....");
      console.log("please girl, you have to wait " +(18-girlAge) + "years");
   }
  else if(boyAge<=21 && girlAge>=18){
      console.log("So , They are are not capable to marry");
      console.log("please boy, you have to wait " +(21-boyAge) + "years");
      console.log("please girl, you don't need to wait but you finance ....");
   }
  else{
      console.log("So , They are are not capable to marry");
      console.log("please boy, you have to wait " +(21-boyAge) + "years");
      console.log("please girl, you have to wait " +(18-girlAge) + "years");
   };
}
else if(yourGender="Female"){
    let girlAge =prompt("Hi Sister,Please type your age");
    let boyAge =prompt("Hi Sister,Please type your Fiance's age");
}
else if(yourGender="female"){
    let girlAge =prompt("Hi Sister,Please type your age");
    let boyAge =prompt("Hi Sister,Please type your Fiance's age");
}

else{
  console.log("wrong,please type again")
}


if (boyAge>=21 && girlAge>=18){
   console.log("Boys age is" + boyAge);
   console.log("girl age is" + girlAge);

  console.log("So , They are capable to marry");
}
else if(boyAge>=21 && girlAge<=18){
   console.log("So , They are are not capable to marry");
   console.log("please boy, you don't need to wait but you finance ....");
   console.log("please girl, you have to wait " +(18-girlAge) + "years");
}
else if(boyAge<=21 && girlAge>=18){
   console.log("So , They are are not capable to marry");
   console.log("please boy, you have to wait " +(21-boyAge) + "years");
   console.log("please girl, you don't need to wait but you finance ....");
}
else{
   console.log("So , They are are not capable to marry");
   console.log("please boy, you have to wait " +(21-boyAge) + "years");
   console.log("please girl, you have to wait " +(18-girlAge) + "years");
};


