const flowerName=['golap','hasnahena','sapla','rojonigondah','sapla'];


//3 way we can show array   
/// for loop 
for(let i=0;i<flowerName.length;i++){
    console.log(flowerName[i]);
}
//2 for Each loop
flowerName.forEach(function(data){
    console.log(data)
})
flowerName.forEach((data)=>{
    console.log(data)
})

//for each loop but we can show just one line ,we use is react 
flowerName.forEach( data=> console.log(data));

///3 rd way we can show map function

flowerName.map((data)=>{
    console.log(data)
})
flowerName.map  (data => console.log(data));