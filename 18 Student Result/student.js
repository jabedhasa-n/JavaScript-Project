/**
 * get elements
 */

const student_form=document.querySelector('#student_form')
const studnet_doc=document.querySelector('#studnet_doc')


student_form.addEventListener('submit',function(e){
    e.preventDefault()


    let name=student_form.querySelector("input[placeholder='Name']")
    let roll=student_form.querySelector("input[placeholder='Roll Number']")
    let class_student=student_form.querySelector("input[placeholder='Class']")
    let photo=student_form.querySelector("input[placeholder='Photo']")
    let gender=student_form.querySelector("input[type='radio']:checked")
    let bangla=student_form.querySelector("input[placeholder='Bangla']")
    let english=student_form.querySelector("input[placeholder='English']")
    let math=student_form.querySelector("input[placeholder='Math']")
    let science=student_form.querySelector("input[placeholder='Science']")
    let social=student_form.querySelector("input[placeholder='Social Science']")
    let religion=student_form.querySelector("input[placeholder='Social Science']")




    let student_data=[];

    if(dataGet("student_result")){
        student_data=dataGet("student_result");
    }
    student_data.push({
        name : name.value,
        roll : roll.value,
        classname : class_student.value,
        photo : photo.value,
        gender : gender.value,
        bangla : bangla.value,
        english : english.value,
        math : math.value,
        science : science.value,
        social : social.value,
        religion : religion.value,



    })
    datasend('student_result',student_data)

    allData()
    
})
allData()
function allData(){

    let all_data=dataGet('student_result')

    let data='';

    all_data.map((list,index)=>{

        data+=`
        <tr>
        <td>${index+1}</td>
        <td>${list.name}</td>
        <td>${list.roll}</td>
        <td>${list.classname}</td>
        <td>${list.gender}</td>
        <td>A</td>
        <td>4.98</td>
        <td><img style='width:50px; height:50px; object-fit:cover;' src='${list.photo}'></td>
        <td>
          <button class="btn btn-info btn-sm">View</button>
          <button onclick="studentdel(${index})" class="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
        
        `
    })
    studnet_doc.innerHTML=data;
}

function studentdel(index_number){

   let con= confirm('are you sure to delete it?')

    if(con){
        let all_index=dataGet('student_result');
        all_index.splice(index_number,1);
        datasend('student_result',all_index);
        allData();
    }
    else{
        return false;
    }

}