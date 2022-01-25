const todoAdd=document.getElementById('todoadd');
const list=document.getElementById('list');


todoAdd.addEventListener('submit',function(e){

  e.preventDefault();
  let do_name=this.querySelector('input[name="opt_name"]').value;
  let opt=this.querySelector('select[name="opt"]').value;

  if(do_name=='' || opt==''){
    alert('all fields are required');
  }
  else{
    let li = document.createElement('li');
    li.className="list-group-item";
  
    
    let closebtn=document.createElement('button');
    closebtn.innerHTML='&times;';
    closebtn.className='close';
  
    let dotext=document.createTextNode(do_name);
    li.appendChild(closebtn);
    li.insertBefore(dotext, closebtn)
    list.appendChild(li);
    this.querySelector('input[name="opt_name"]').value='';
    
    closebtn.addEventListener('click',function(){
      this.parentElement.remove();
    })
  }

  
})