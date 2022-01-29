const hour=document.querySelector('.hour');
const min=document.querySelector('.min');
const sec=document.querySelector('.sec');
 
// console.log(currentsec,currentmin,currenthour);


setInterval(()=>{
  let time=new Date();


  let currentsec=time.getSeconds();
  let currentmin=time.getMinutes();
  let currenthour=time.getHours();

  console.log(currentmin)

  min.style.transform=`rotate(${6*currentmin+currentsec*(1/10)}deg)`;
  sec.style.transform=`rotate(${6*currentsec}deg)`;
  hour.style.transform=`rotate(${30*currenthour+currentmin*(1/2)}deg)`;
 
},1000)