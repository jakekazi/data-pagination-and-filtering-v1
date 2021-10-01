// This function will create and insert/append the elements needed to display a "page" of 9 students
function showPage(list, page) {
   let startIndex = (page * 9) - 9
   let endIndex = page * 9
   let studentList = document.querySelector('.student-list')
   studentList.innerHTML = ''

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentList.insertAdjacentHTML('beforeend', `<li class="student-item cf"><div class="student-details">
         <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
         <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
         <span class="email">${list[i].email}</span></div>
         <div class="joined-details"><span class="date">${list[i].registered.date}</span></div></li>`
         )
      }
   }
}

//This function will create and insert/append the elements needed for the pagination buttons
function addPagination(list) {
   let numberOfPaginationButtons = Math.ceil(list.length / 9)
   let buttonsContainer = document.querySelector('.link-list')
   buttonsContainer.innerHTML = ''

   let i = 1
   while (i <= numberOfPaginationButtons) {
      buttonsContainer.insertAdjacentHTML('beforeend', `<li><button type="button">${i}</button></li>`)
      i++
   }

   let firstButton = document.querySelector('button')
   firstButton.className = 'active'

   buttonsContainer.addEventListener('click', (e) => {
      buttons = document.querySelectorAll('.link-list li button')

      //Loop over the nodelist of buttons to remove the active class from non-active buttons
      for (let i = 0; i < buttons.length; i++) {
         if (buttons[i].className === 'active') {
            buttons[i].classList.remove('active')
         }
      }

      e.target.className = 'active'

      
      let clickedPage = parseInt(e.target.innerText)
      showPage(list, clickedPage)
   })
}

showPage(data, 1)
addPagination(data)
