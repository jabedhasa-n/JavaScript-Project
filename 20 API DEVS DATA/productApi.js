const skills=document.querySelector('#skill_list');
const devs_form=document.querySelector('#devs-form');
const devs_data=document.querySelector('#devs_data');
const devs_edit_form=document.querySelector('#devs-edit_form');
//load all skills from api

const skillsload=()=>{
  axios.get("https://my-json-server.typicode.com/jabed366/devs_data/Skills").then(server=>{
    let skill_list='';
    server.data.map(skill=>{
      skill_list+=`
      <option value="${skill.id}">${skill.name}</option>
      `;
    });
    skills.insertAdjacentHTML('beforeend',skill_list);
  })
}

skillsload();

/**
 * get developers Function
 */
const getDevelopers=()=>{
  devs_data;
  axios.get('https://my-json-server.typicode.com/jabed366/devs_data/developers').then(res=>{
    let all_devs_data='';
    res.data.map((dev,index)=>{
    all_devs_data+=`
    <tr>
    <td>${index+1}</td>
    <td>${dev.name}</td>
    <td>${dev.email}</td>
    <td><img style="width: 50px; height: 50px; object-fit: cover;"
        src="${dev.photo}" alt="">
    </td>
    <td>
      <a data-bs-toggle="modal" onclick="quickView(${dev.id})" class="btn btn-info btn-sm" href="#data_view"><i class="fa fa-eye"></i></a>
      <a data-bs-toggle="modal" onclick="allDeveloper(${dev.id})" class="btn btn-warning btn-sm" href="#data_edit"><i class="fa fa-edit"></i></a>
      <a data-bs-toggle="modal" onclick="data_delete(${dev.id})" class="btn btn-danger btn-sm" href="#data_trash"><i class="fa fa-trash"></i></a>
    </td>
  </tr>
    `;
 })
 devs_data.innerHTML=all_devs_data;
})
};

getDevelopers();

devs_form.addEventListener('submit',function(e){
  e.preventDefault();
  let name=document.querySelector("#name");
  let email=document.querySelector("#email");
  let photo=document.querySelector("#photo");
  let skill=document.querySelector("#skill_list");

  if(name.value=='' || email.value=='' ||photo.value==''){
    alert('All Field Required');
  }
  else{
    axios.post('https://my-json-server.typicode.com/jabed366/devs_data/developers',{
      id: "",
      name :name.value,
      email :email.value,
      photo : photo.value,
      skillId:skill.value
    }).then(res=>{
      getDevelopers();
    })
  }
})


function allDeveloper(id){
  let name=document.querySelector('#ename')
  let email=document.querySelector('#eemail')
  let photo=document.querySelector('#ephoto')
  let skill=document.querySelector('#eskill_list');
  let epreview=document.querySelector('#epreview');
  let edit_id=document.querySelector('#edit_id');
  axios.get(`https://my-json-server.typicode.com/jabed366/devs_data/developers/${id}`).then(res=>{
    name.value=res.data.name;
    email.value=res.data.email;
    photo.value=res.data.photo;
    skill.value=res.data.skillId;
    epreview.setAttribute('src', res.data.photo)
    edit_id.value=res.data.id;
  })
}

devs_edit_form.addEventListener('submit',function(e){
  e.preventDefault();
  let name=document.querySelector("#ename");
  let email=document.querySelector("#eemail");
  let photo=document.querySelector("#ephoto");
  let skill=document.querySelector("#eskill_list");
  let edit_id=document.querySelector("#edit_id");

  axios.patch(`https://my-json-server.typicode.com/jabed366/devs_data/developers/${edit_id.value}`,{
    id: "",
    name :name.value,
    email :email.value,
    photo : photo.value,
    skillId:skill.value
  }).then(res=>{
    getDevelopers();
  })
})

const delete_data=document.querySelector('#delete_data');
function data_delete(id){
  delete_data.setAttribute('deleId',id);
  // console.log(delete_data);
}

delete_data.addEventListener('click',function(){
  let get_data=this.getAttribute('deleId')
  axios.delete(`https://my-json-server.typicode.com/jabed366/devs_data/developers/${get_data}`).then(res=>{
    getDevelopers();
  })
})


/**
 * quick view function
 * @param {*} id 
 */
function quickView(id){
  let view_data=document.querySelector("#data_view");
  let quick_views=view_data.querySelector(".modal-body");
  axios.get(`https://my-json-server.typicode.com/jabed366/devs_data/developers/${id}`).then(dev=>{

  axios.get(`https://my-json-server.typicode.com/jabed366/devs_data/Skills/${id}`).then(res=>{
    quick_views.innerHTML=`
    <img src="${dev.data.photo}" alt="">
    <h2>${dev.data.name}</h2>
    <h2>${res.data.name}</h2>
    `
    })

  })

}