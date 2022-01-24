const start = document.getElementById('start')
const stoped = document.getElementById('stoped')
const reset = document.getElementById('reset')
const count = document.getElementById('count')
const progress = document.querySelector('.progress')

const h1=document.querySelector('h1');

let time;
let counter;
start.addEventListener('click',()=>{
  counter=count.value
  time=setInterval(() => {
    h1.innerText=counter;
    let width=progressFunction(count.value,counter);
    progress.style.width=`${width}%`; 

    if(width>50 && width<=100){
      progress.style.backgroundColor='red';
    }
    else if(width>30 && width<=50){
      progress.style.backgroundColor='green';
    }
    else if(width>0 && width<=30){
      progress.style.backgroundColor='orange';
    }
    if(counter==0){
      clearInterval(time);
    }
    counter--;
  }, 1000);
})

stoped.addEventListener('click',()=>{
  clearInterval(time);
})

reset.addEventListener('click',()=>{
  counter=0;
  h1.innerText='Please Start Again ';
  clearInterval(time);
})


