let userInput = document.querySelector("#userInput");
let addBtn = document.querySelector("#addBtn");
let tasks = document.querySelector("#tasks");
let clr = document.querySelector("#clr");

addBtn.addEventListener('click',()=>{
if(userInput.value === ""){
    alert('Enter the field First');
}else{
    let a = document.createElement('ol');
    a.innerHTML = `<li class="bg-success "> ${userInput.value} <i class="bi bi-trash-fill btn btn-danger"></i></li>`;
    tasks.appendChild(a);
    userInput.value = null;
    a.querySelector("i").addEventListener('click',()=>{
        a.remove();
    })
}
})
clr.addEventListener('click',()=>{
   let a = confirm('You Want to Clear All');
   a;
   if(a === false){
    alert('You Cancled');
   }else{
    tasks.remove();
   }
   window.location.reload();
})