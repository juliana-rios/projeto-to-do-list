// Seleção de elementos

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-todo");
const editInut = document.querySelector("#edit-input");
const cancelInputBtn = document.querySelector("#cancel-edit-btn");



// Funções

// Eventos
todoForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    const inputValue = todoInput.value

    if(inputValue){
        console.log(inputValue);
       // save todo 
    }
})