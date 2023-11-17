/// add todo item:

let submit = document.getElementById("submit").addEventListener("click", (e)=>{
    e.preventDefault();
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    localStorage.setItem("todos",JSON.stringify([title,desc]));
    // console.log(e);
    let todo = document.getElementById("todo");
    todo.innerHTML +=`
     <li id="item" class="list-group-item d-flex justify-content-between align-items-center mt-4">
        <div  class="ms-2 me-auto">
          <h4 class="mb-1">${title}</h4>
          <p class="mb-1">${desc}</p>
        </div>
        <div class="d-flex">
          <button onClick="deleteOneItem()" class="btn btn-outline-danger btn-sm">Delete</button>
        </div>
      </li>
    ` 
    let clear = document.getElementById('clear');
    clear.reset();
})

//delete all todo items:

let deleteBtn = document.getElementById("deleteBtn").addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.removeItem("todos");
    let todo = document.getElementById("todo");
    todo.innerHTML = "";
});

//delete one todo Item:

const deleteOneItem = ()=>{
    // console.log("hello");
    localStorage.removeItem("todos");
    let item = document.getElementById("item");
    item.remove();
}