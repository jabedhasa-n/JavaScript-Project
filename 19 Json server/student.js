/**
 * get elements
 */

const student_form=document.querySelector('#student_form')
const studnet_doc=document.querySelector('#studnet_doc')


student_form.addEventListener('submit',function(e){
    e.preventDefault()


    let name=student_form.querySelector("input[placeholder='Name']");
    let roll=student_form.querySelector("input[placeholder='Roll Number']");
    let class_student=student_form.querySelector("input[placeholder='Class']");
    let photo=student_form.querySelector("input[placeholder='Photo']");
    let gender=student_form.querySelector("input[type='radio']:checked");
    let bangla=student_form.querySelector("input[placeholder='Bangla']");
    let english=student_form.querySelector("input[placeholder='English']");
    let math=student_form.querySelector("input[placeholder='Math']");
    let science=student_form.querySelector("input[placeholder='Science']");
    let social=student_form.querySelector("input[placeholder='Social Science']");
    let religion=student_form.querySelector("input[placeholder='Social Science']");

     

    if(name.value=='' || roll.value=='' || class_student.value=='' || photo.value=='' || gender.value=='' || bangla.value=='' || english.value=='' || math.value=='' || science.value=='' || social.value=='' || religion.value==''){
        alert('all Field are required')
    }
    else{
    
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
            religion : religion.value
        })
        datasend('student_result',student_data)
    
        allData()

        name=student_form.querySelector("input[placeholder='Name']").value='';
        roll=student_form.querySelector("input[placeholder='Roll Number']").value='';
        class_student=student_form.querySelector("input[placeholder='Class']").value='';
        photo=student_form.querySelector("input[placeholder='Photo']").value='';
        gender=student_form.querySelector("input[type='radio']:checked").value='';
        bangla=student_form.querySelector("input[placeholder='Bangla']").value='';
        english=student_form.querySelector("input[placeholder='English']").value='';
        math=student_form.querySelector("input[placeholder='Math']").value='';
        science=student_form.querySelector("input[placeholder='Science']").value='';
        social=student_form.querySelector("input[placeholder='Social Science']").value='';
        religion=student_form.querySelector("input[placeholder='Social Science']").value='';
    }
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
          <button onclick="studentresult(${index})" class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#student_single_model">View</button>
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
const student_result_data=document.querySelector('.student_result_data')

function studentresult(result){
    let all_result=dataGet('student_result')

   console.log( all_result[result]);
    
   let lead_name= new MainFunction;
    let student_result='';

    student_result=`
    <img class="shadow"
              src="${all_result[result].photo}"
              alt="">
            <h2 class="text-center">${all_result[result].name}</h2>
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks</th>
                  <th>GPA</th>
                  <th>Grade</th>
                  <th>CGPA</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bangla</td>
                  <td>${all_result[result].bangla}</td>
                  <td>${lead_name.grade(all_result[result].bangla)}</td>
                  <td>${lead_name.gpa(all_result[result].bangla)}</td>
                  <td rowspan="6">4.00</td>
                  <td rowspan="6">A+</td>
                </tr>
                <tr>
                  <td>English</td>
                  <td>${all_result[result].english}</td>
                  <td>${lead_name.grade(all_result[result].english)}</td>
                  <td>${lead_name.gpa(all_result[result].english)}</td>
                </tr>
                <tr>
                  <td>Math</td>
                  <td>${all_result[result].math}</td>
                  <td>${lead_name.grade(all_result[result].math)}</td>
                  <td>${lead_name.gpa(all_result[result].math)}</td>
                </tr>
                <tr>
                  <td>Science</td>
                  <td>${all_result[result].science}</td>
                  <td>${lead_name.grade(all_result[result].science)}</td>
                  <td>${lead_name.gpa(all_result[result].science)}</td>
                </tr>
                <tr>
                  <td>Social Science</td>
                  <td>${all_result[result].social}</td>
                  <td>${lead_name.grade(all_result[result].social)}</td>
                  <td>${lead_name.gpa(all_result[result].social)}</td>
                </tr>
                <tr>
                  <td>Religion</td>
                  <td>${all_result[result].religion}</td>
                  <td>${lead_name.grade(all_result[result].religion)}</td>
                  <td>${lead_name.gpa(all_result[result].religion)}</td>
                </tr>
              </tbody>
            </table>
    `
    student_result_data.innerHTML=student_result;
    
}


/**
 *                   <td rowspan="6">${lead_name.cgpa(lead_name.gpa(all_result[result].bangla),lead_name.gpa(all_result[result].english),lead_name.gpa(all_result[result].math),lead_name.gpa(all_result[result].science),lead_name.gpa(all_result[result].social),lead_name.gpa(all_result[result].religion))}</td>
 */