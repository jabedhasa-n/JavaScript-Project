/**
 * Get Elements
 */

const tab_list=document.querySelectorAll('.tab-list-part ul li a');
const tab_body=document.querySelectorAll('.tab_body');

tab_list.forEach(data=>{
    data.addEventListener('click',function(e){
        e.preventDefault()
        tab_list.forEach(data=>{
            data.classList.remove('active')
        })
        data.classList.add('active')
        let tab_bo=document.querySelector(data.getAttribute('href'));
        tab_body.forEach(data=>{
            data.classList.remove('active')
        })
        tab_bo.classList.add('active')
    })
})