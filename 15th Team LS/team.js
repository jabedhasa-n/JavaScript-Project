///get Elements

const dev_form=document.querySelector('#dev_form');
const devs_area=document.querySelector('.devs_area');


dev_form.addEventListener('submit',function(e){
  e.preventDefault();

  let name =this.querySelector('input[name="name"]');
  let gender =this.querySelector('input[name="gender"]:checked');
  let skill =this.querySelectorAll('input[name="skill"]:checked');
  let photo =this.querySelector('input[name="photo"]');

  // console.log(gender.value);
  // console.log(skill);

  let skills_arr=[];

  for (let i=0; i<skill.length;i++){

    skills_arr.push(skill[i].value);
  }
  // console.log(skills_arr); 

  let data_arr;
  if(dataGet('devs')){
    data_arr=dataGet('devs');
  }
  else{
    data_arr=[];
  }
  data_arr.push({
    name : name.value,
    gender : gender.value,
    skills : skills_arr,
    photo : photo.value
  }); 

  // console.log(data_arr);

  datasend('devs',data_arr);
  allDevs();
})

allDevs();
function allDevs(){
  let all_devs=dataGet('devs');

  let data='';

  all_devs.map(d=>{

    let lists ='';
    d.skills.map(list=>{
      lists+='<li class="list-group-item"> '+list+' </li>'
    });
    data+= `
    <div class="col-md-4 my-3">
    <div class="card">
      <img style="width:100%; height: 250px; object-fit: cover;" class="card-img"
        src="${d.photo}"
        alt="">
      <div class="card-body">
        <h2>${d.name}</h2>
        <p> Gender ${d.gender}</p>
        Skills
        <hr>
        <ul class="list-group">
        ${ lists} 
        </ul>
      </div>
    </div>
  </div>
    `;
  })

  devs_area.innerHTML=data;
}