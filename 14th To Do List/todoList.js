const todo=document.getElementById('todo')
const add=document.getElementById('add')
const list=document.getElementById('list')




add.addEventListener('click',()=>{
    let li =document.createElement('li');
    li.className='list-group-item';
    li.innerText=todo.value;
    list.appendChild(li);
    todo.value='';
})