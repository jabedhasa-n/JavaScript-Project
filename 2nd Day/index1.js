let english=parseInt
(prompt("Please type your English marks"));
let bangla=parseInt
(prompt("Please type your Bangla marks"));
let mathematics=parseInt
(prompt("Please type your Mathematics marks"));
let physics=parseInt
(prompt("Please type your Physics marks"));
let chemistry=parseInt
(prompt("Please type your Chemistry marks"));

let final= (english + bangla + mathematics + physics + chemistry)/5;


if(final>=0 && final <=32){

  console.log( "Your average marks is " + final + " and Your grade is F");

}
else if(final>=33 && final <=39){
    console.log( "Your average marks is " + final + " and Your grade is C");
}
else if(final>=40 && final <=49){
    console.log( "Your average marks is " + final + " and Your grade is D");
}
else if(final>=50 && final <=59){
    console.log( "Your average marks is " + final + " and Your grade is B");
}
else if(final>=60 && final <=69){
    console.log( "Your average marks is " + final + " and Your grade is A-");
}
else if(final>=70 && final <=79){
    console.log( "Your average marks is " + final + " and Your grade is A");
}
else if(final>=80 && final <=100){
    console.log( "Your average marks is " + final + " and Your grade is A+");
}
else {
    console.log("It is undefined");
};



