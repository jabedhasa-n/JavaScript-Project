// Create a loop where the initial value is 10,000. You need to rotate the loop 50 times by using the increment and decrement operator twice.

for(let i=10000; i>=9975;i--){
    console.log(i);
    
    if(i==9975){
        for(let a=9975; a<=10000; a++){
            console.log(a);
        }
    }
}
// for(let i=10000; i<=10025;i++){
//     console.log(i);
    
//     if(i==10025){
//         for(let a=10025; a>=10000; a--){
//             console.log(a);
//         }
//     }
// }
