// Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11

for(let i=1; i<=1000; i+=3){
    if(i%11==0){
        console.log(i);
        break;
    }
    console.log(i);
}