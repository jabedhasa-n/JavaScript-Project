/**
 * Get Elements
 */

const lists =document.querySelectorAll('.tab_list ul li a')
const item_body =document.querySelectorAll('.post-item-body')



lists.forEach(list=>{
    list.addEventListener('click',function(e){
        e.preventDefault();
        lists.forEach(list_item=>{
            list_item.classList.remove('active')
        })
        list.classList.add('active')

        const open_body=document.querySelector(list.getAttribute('href'))

        item_body.forEach(body=>{
            body.classList.remove('active')
        })
        open_body.classList.add('active');
    })
})