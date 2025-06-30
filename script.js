const input =document.querySelector(".input-box");
const button =document.querySelector(".add-button");
const todoList =document.querySelector(".todo-list");

button.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteTodo);
function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-container");

    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText = input.value;
    todoDiv.appendChild(todoItem);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todoDiv.appendChild(deleteBtn);

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.innerHTML='<i class="fa-solid fa-check"></i>';
    todoDiv.appendChild(completeBtn);

    todoList.appendChild(todoDiv );
    input.value="";

}
function deleteTodo(event){
    console.log(event.target)

    const item = event.target;
    if (item.classList[0] === "delete-btn"){
        const delItem = item.parentElement;
        delItem.remove();
    }
    if (item.classList[0] === "complete-btn"){
        const delItem = item.parentElement;
        delItem.classList.toggle("completed");
    }
}