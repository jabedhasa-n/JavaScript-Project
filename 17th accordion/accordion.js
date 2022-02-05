/**
 * Get Elements
 */

const accordionClick=document.querySelectorAll('.accordion-header');


const accordionBody=document.querySelectorAll('.accordion-body');
const clickable=document.querySelector('#clickibale');


accordionClick.forEach(data=>{


    data.addEventListener('click',function(){

        accordionClick.forEach(data=>{
            if(data!=this){
                data.classList.remove('active')
                data.nextElementSibling.classList.remove('active');
            }
        })

        data.classList.toggle('active')
        data.nextElementSibling.classList.toggle('active');
        
    })
})


