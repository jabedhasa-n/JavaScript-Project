/**
 * Get Elements
 */

const skills=document.querySelectorAll('.skill')
const dev_skill=document.querySelector('.dev_skill')



skills.forEach(skill=>{
    
    skill.addEventListener('change',function(){
        
        let all_data=document.querySelectorAll('.skill:checked');
        let data_arry=[];
        all_data.forEach(data=>{
            data_arry.push(data.value)
        })
        // console.log(data_arry)
        let list='';
        data_arry.map(data=>{
            list+=` <li class="list-group-item">${data}</li>`
        })
        dev_skill.innerHTML=list;
    })
})