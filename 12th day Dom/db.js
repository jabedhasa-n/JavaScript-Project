const team = document.querySelector(".team");

dev.map((data) => {
  team.innerHTML += `

<div class="team-memebrs">
   <img src="${data.devPhoto}" alt="" />
   <h3>${data.devName}</h3>
   <h4>${data.skill}</h4>
   <p>${data.location}</p>
   <span>Salary : ${data.salry}<span>
</div>
`;
});

///phone Book

const phoneBookList = document.querySelector(".faltu tbody");

phoneBook.map((data) => {
  phoneBookList.innerHTML += `
<tr>
  <td>${data.numberSerial}</td>
  <td>${data.name}</td>
  <td>${data.location}</td>
  <td>${data.number}</td>
  <td>
    <img
      src="${data.photo}"
      alt=""
    />
  </td>
</tr>
`;
});

///student

const studentList = document.querySelector(".studentSection tbody");

studentAll.map((data) => {
  studentList.innerHTML += `
<tr>
  <td>${data.numberSerial}</td>
  <td>${data.name}</td>
  <td>${data.location}</td>
  <td>${data.number}</td>
  <td>
    <img
      src="${data.photo}"
      alt=""
    />
  </td>
</tr>
`;
});
