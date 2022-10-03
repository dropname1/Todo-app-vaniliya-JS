let input = document.querySelector(".inputTodo");
let todoWrapper = document.querySelector(".todosWrapper");
let todoNumber = 1;
input.addEventListener('keyup',(e)=> {
   if(e.code === 'Enter' && input.value !== '' ) {

    let todo = document.createElement('div')
    let todoId = document.createElement('div')
    let todoTitle = document.createElement('div')
    let todoClose = document.createElement('div')

    todo.classList.add('todo')
    todoId.classList.add("todoId");
    todoTitle.classList.add("todoTitle");
    todoClose.classList.add("todoCloseButton");

    todo.appendChild(todoId)
    todo.appendChild(todoTitle)
    todo.appendChild(todoClose)
    todoWrapper.appendChild(todo)

    let todoContent = input.value
    todoTitle.textContent = todoContent
    todoId.textContent = todoNumber++
    todoClose.textContent = "×";
    input.value = ''

    todoClose.addEventListener('click',(e)=> {
        e.target.parentElement.style.display = 'none'
    })
    todoTitle.addEventListener('click',function (e) {
        e.target.style.textDecoration = 'line-through'
    })
   }
})