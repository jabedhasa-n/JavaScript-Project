const start = document.getElementById('start')
const stoped = document.getElementById('stoped')
const reset = document.getElementById('reset')
const count = document.getElementById('count')

const h1=document.querySelector('h1')

let time;

let counter;
start.addEventListener('click',()=>{
  counter=count.value
  time=setInterval(() => {
    h1.innerText=counter;
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
  h1.innerText=counter;
  clearInterval(time);
})