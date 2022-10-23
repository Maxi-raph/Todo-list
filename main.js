const button = document.querySelector('.btn')
const todoList = document.querySelector('.todo_list')
const input = document.querySelector('.input')
const arrOfObj = []
// creating the add function to add the list to the parent container //
function addLi() {  
  if (input.value === '') {
  const randomArrText = ['Type something' ,'Input is empty', 'Write here' , 'Don’t you wanna do anything today' ]
    input.placeholder =   randomArrText[Math.floor(Math.random() * randomArrText.length)]
    
    input.focus() 
  }
  else{
    input.value = input.value[0].toUpperCase() + input.value.slice(1)
    input.placeholder = "What do you want to do today..."
      arrOfObj.push(input.value) 
        todoList.innerHTML +=  `<div class = "list"> <span class = "text">${arrOfObj.slice(-1)}</span><div><input type = 'checkbox' class = 'check'/><button class = "delete"><i class="fa-solid fa-trash" ></i></button></div></div>`  
        input.value = ''
        check()
        delLi()
  }
}
     //creating the checked function to strike through the list to indicate that it’s been completed//
function check() {
  const checkBoxes = document.querySelectorAll('.check')
  checkBoxes.forEach((checkBox,i) => {
    checkBox.addEventListener('click',() => {  
      const list = document.querySelectorAll('.list')
      checkBox.style.display = 'none'
      list[i].classList.toggle('checked')   
   })
 })
}
     // creating the delete function to delete the list from the parent container //
 function delLi() {
  const deleteIcon = document.querySelectorAll('.delete')
  const list = document.querySelectorAll('.list')
  deleteIcon.forEach((del,i) => { 
    del.addEventListener( 'click',  () => {
      todoList.removeChild(list[i])
   })
 })
}
     // Adding an event to the enter key to add the inputvalue to the array//
window.addEventListener('keypress',(e) => {
  if (e.code === 'Enter' || e.code === 'Submit') { 
    e.preventDefault() 
    addLi()
  } 
})
    // Adding an event to the button to add the inputvalue to the array// 
button.addEventListener('click', addLi)
      
 

