/**
 * Get Elements
 */

const accordionClick=document.querySelectorAll('.accordion-header');


const accordionBody=document.querySelectorAll('.accordion-body');
const clickable=document.querySelector('#clickibale');


accordionClick.forEach(data=>{


    data.addEventListener('click',function(){
        data.classList.toggle('active')
        data.nextElementSibling.classList.toggle('active');
        let add =document.querySelectorAll('.accordionBody.active')

        for(let i=0;i<add.length;i++){
            add[i].classList.remove('active');
        }
        
    })

 


})


