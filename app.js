// Selectors
const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("todo-button");
const todoList = document.getElementById("todo-list");
const filterOption = document.getElementById("filter-todo");

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//Functions
function addTodo(event) {
//Prevent form from submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    if(todoInput.value > 0) {
        const newTodo = document.createElement('li');
        newTodo.innerHTML = todoInput.value;
    }
    
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    // Clear Todo Input Value
    todoInput.value = "";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CKECK MARK BUTTON 
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CKECK trash MARK BUTTON 
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST IN HTML
    todoList.appendChild(todoDiv);
}

function deleteCheck(e) {
    const item = e.target;
    //Delete todo
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //animation for when an item is removed from list
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }
    // Check mark
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed') 
    }
}



