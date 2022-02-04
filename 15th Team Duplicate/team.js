
/**
 * Get Elements
 */


const dev_form=document.querySelector('#dev_form');
const devs_area=document.querySelector('.devs_area');




dev_form.addEventListener('submit',function(e){
  e.preventDefault();
  let name=document.querySelector('input[name="name"]');
  let skill=document.querySelectorAll('input[name="skill"]:checked');
  let gender=document.querySelector('input[name="gender"]:checked');
  let photo=document.querySelector('input[name="photo"]');


  let skills_arr=[];

  for (let i=0; i<skill.length;i++){

    skills_arr.push(skill[i].value);
  }

  let devs_arry;

  if(dataGet('devs')){
    devs_arry=dataGet('devs');
  }
  else{
    devs_arry=[];
  };

  devs_arry.push({
    name : name.value,
    skills : skills_arr,
    gender:gender.value,
    photo : photo.value
  })
  dataSend('devs',devs_arry)
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



// function allDevs(){

//   let dev=dataGet('devs');
//  let datas='';
//   dev.map(data=>{
    
//     datas+=`
//     <div class="col-md-4">
//     <div class="card">
//       <img class="card-img" src="https://www.seekpng.com/png/detail/355-3550315_executive-man-png.png" alt="">
//       <div class="card-body">
//         <h2>${data.name}</h2>
//         <h4>${data.gender}</h4>
//         <ul class="list-group">
//           <li class="list-group-item">React Developer</li>
//           <li class="list-group-item">Pythoon Developer</li>
//         </ul>
//       </div>
//     </div>
//   </div>
//   `;
// })
// devs_area.innerHTML=datas;
// }
