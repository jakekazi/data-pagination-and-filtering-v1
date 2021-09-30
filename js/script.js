// This function will create and insert / append the elements needed to display a "page" of nine students
function showPage(list, page) {
   let startIndex = (page * 9) - 9
   let endIndex = page * 9
   let studentList = document.getElementsByClassName('student-list')
   studentList.innerHTML = ''

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         let studentInfo = `<li class="student-item cf"><div class="student-details">
         <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
         <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
         <span class="email">${list[i].email}</span></div>
         <div class="joined-details"><span class="date">${list[i].registered.date}</span></div></li>`

         studentList.insertAdjacentHTML("beforeend", studentInfo)
      }
   }
}

showPage(data, 1)

// //This function will create and insert/append the elements needed for the pagination buttons
// function addPagination(list) {
//    let numberOfPaginationButtons = Math.ceil(list.length / 9)
//    let buttons = document.getElementsByClassName('link-list')
//    buttons.innerHTML = ''

//    let i = 1
//    while (i <= numberOfPaginationButtons) {
//       let button = `<li><button type="button">${i}</button></li>`
//       buttons.insertAdjacentHTML("beforeend", button)
//       i++
//    }
//    return buttons
// }

//addPagination(data)