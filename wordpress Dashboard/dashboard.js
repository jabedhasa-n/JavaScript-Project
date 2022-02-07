/**
 * Get Elements
 */

const lists =document.querySelectorAll('.tab_list ul li a');
const item_body =document.querySelectorAll('.post-item-body');

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


/**
 * Salinet Setting
 */

const salient_list_item=document.querySelectorAll('.salient_list-item li a')
const salient_inner_item=document.querySelectorAll('.salient-inner-list')


salient_list_item.forEach(data=>{
    data.addEventListener('click',function(e){
        e.preventDefault();

        salient_list_item.forEach(data=>{
            if(data!=this){
                data.classList.remove('active');
            }
        })
        data.classList.add('active')
        const list=document.querySelector(data.getAttribute('href'));
        salient_inner_item.forEach(data=>{
            data.classList.remove('active')
        })
        list.classList.add('active')
    })
})