const start = document.getElementById('start')
const stoped = document.getElementById('stoped')

const h1=document.querySelector('h1')
let time;


start.addEventListener('click',()=>{

  h1.innerText='Love is coming....'
  time=setTimeout(()=>{
    h1.innerText=`We Love Mern Stack`
  },5000)

});

stoped.addEventListener('click',function(){
  clearTimeout(time);
  h1.innerText='New Love is coming.....';

  setTimeout(()=>{
    h1.innerText='We Love Python'
  },5000)
})



/** counter */

const start = document.getElementById('start')
const stoped = document.getElementById('stoped')
const reset = document.getElementById('reset')

const h1=document.querySelector('h1')

let time;

let counter=0;
start.addEventListener('click',()=>{

  time=setInterval(() => {
    h1.innerText=counter;
    counter++;
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

