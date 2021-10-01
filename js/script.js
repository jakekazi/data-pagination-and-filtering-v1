// This function will create and insert / append the elements needed to display a "page" of 9 students
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
   let buttons = document.querySelector('.link-list')
   buttons.innerHTML = ''

   let i = 1
   while (i <= numberOfPaginationButtons) {
      buttons.insertAdjacentHTML('beforeend', `<li><button type="button">${i}</button></li>`)
      i++
   }

   let firstButton = document.querySelector('button')
   firstButton.className = 'active'

   buttons.addEventListener('click', (e) => {
      let linkList = document.querySelectorAll('.link-list li')

      //Loop over the array of link buttons and if any button has the active class, remove it.
      for (let i = 0; i < linkList.length; i++) {
         if (linkList[i].firstElementChild.className === 'active') {
            linkList[i].firstElementChild.classList.remove('active')
         }
      }

      e.target.className = 'active'
      //Select the number of the clicked page button to pass to the showPage function
      let clickedPage = parseInt(e.target.innerText)
      showPage(list, clickedPage)
   })
}

showPage(data, 1)
addPagination(data)
