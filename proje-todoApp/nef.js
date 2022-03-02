const formAdd=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');

const generetaTemplate=(todo)=>{
   const html=`
   <li class="list-group-item d-flex justify-content-between align-item-center">
            <span>${todo}</span>
            <i class="fa-solid fa-trash-can delete"></i>
        </li>
   `
   list.innerHTML+=html;
}

formAdd.addEventListener('submit',e=>{
    e.preventDefault();

    const todo=formAdd.add.value.trim();

    if(todo.length > 0){
        generetaTemplate(todo);
        formAdd.reset();
    }
})

list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

const filterTodos=(term)=>{
    // console.log(term)
    // console.log(list.children)
    // console.log(Array.from(list.children))

    Array.from(list.children).filter(e=> !e.textContent.toLowerCase().includes(term)).forEach(e=> e.classList.add('filtered'))
    Array.from(list.children).filter(e=> e.textContent.toLowerCase().includes(term)).forEach(e=> e.classList.remove('filtered'))
    
}

search.addEventListener('keyup',()=>{
    const term =search.value.trim().toLowerCase();
    
    filterTodos(term);
})