// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
let oldInputValue; //titulo em uma variável global

// Funções

const saveTodo = (text) => {
  const todo = document.createElement("div"); //criando a div externa
  todo.classList.add("todo"); 
  const todoTitle = document.createElement("h3"); //inserindo o título 
  todoTitle.innerText = text; 
  todo.appendChild(todoTitle); //coloca o h3 na div do todo 

  const doneBtn = document.createElement("button"); //criando o butão de marcar
  doneBtn.classList.add("finish-todo"); //add classe a ele 
  doneBtn.innerHTML = "<i class = 'fa-solid fa-check'> <i/>"; //botão pronto 
  todo.appendChild(doneBtn); //coloco o botão 

  const editBtn = document.createElement("button"); //criando o butão de editar
  editBtn.classList.add("edit-todo"); //add classe a ele 
  editBtn.innerHTML = "<i class = 'fa-solid fa-pen'> <i/>"; //botão pronto 
  todo.appendChild(editBtn); //coloco o botão 


  const deleteBtn = document.createElement("button"); //criando o butão de marcar
  deleteBtn.classList.add("remove-todo"); //add classe a ele 
  deleteBtn.innerHTML = "<i class = 'fa-solid fa-xmark'> <i/>"; //botão pronto 
  todo.appendChild(deleteBtn); //coloco o botão 

  todoList.appendChild(todo); 
  todoInput.value = ''; //limpando o valor depois do uso 
}


const toggleForms = () =>{
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide"); 
  todoList.classList.toggle("hide"); 

}

const updateTodo = (text) => {
  const todos = document.querySelectorAll(".todo"); // Correção: use querySelectorAll para obter todos os elementos

  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");
    if (todoTitle.innerText == oldInputValue) {
      todoTitle.innerHTML = text;
    }
  });
};



//Eventos

//add tarefa
todoForm.addEventListener("submit", (e) =>{
  e.preventDefault(); 
  const inputValue = todoInput.value; 

  if(inputValue){
    saveTodo(inputValue); //salvando no todo
  }
});


//identificar o click nos buttons 
//vejo o documento todo e vejo tudo que foi clicado
document.addEventListener("click", (e) =>{
  const targetEl = e.target; 
  const parentEl = targetEl.closest("div"); //seleciona a div mais proxima
  let todoTitle; 

  if(parentEl && parentEl.querySelector("h3")){
    todoTitle = parentEl.querySelector('h3').innerText; 
  }
  if(targetEl.classList.contains("finish-todo")){ //consigo saber se o botão é o finish-todo
    parentEl.classList.toggle("done"); //add a classe done aos todos clicados caso não tenha 
  }
  if(targetEl.classList.contains("remove-todo")){
    //botão de remoção 
    parentEl.remove(); //excluo as tarefas
  }
  if(targetEl.classList.contains("edit-todo")){

    toggleForms(); //esconde um formulário e mostra outro 
    editInput.value = todoTitle; 
    oldInputValue = todoTitle; 

  }

}); 

//removendo do todo
cancelEditBtn.addEventListener("click", (e) =>{
  e.preventDefault(); 
  toggleForms(); 

});

//click de editar
editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = editInput.value;

  if (editInputValue) {
    updateTodo(editInputValue);
  }

  toggleForms();
});



