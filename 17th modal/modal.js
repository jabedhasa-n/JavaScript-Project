/**
 * Get Elements
 */



const edit=document.querySelector('#edit')
const wrap=document.querySelector('.modal-wrap')
const inner=document.querySelector('.modal-inner')
const closebutton=document.querySelector('.modal-header .close')
const alartclose=document.querySelector('.alart-header .close')
const modal_alart=document.querySelector('.model-alart-section')
const editing=document.querySelector('.editing')
const discard=document.querySelector('.discard')


edit.addEventListener('click',function(){
    wrap.classList.add('active');
})

closebutton.addEventListener('click',function(){
    modal_alart.style.display='flex';
})
alartclose.addEventListener('click',function(){
    modal_alart.style.display='none';
})

editing.addEventListener('click',function(){
    modal_alart.style.display='none';
})
discard.addEventListener('click',function(){
    modal_alart.style.display='none';
    wrap.classList.remove('active');
})
