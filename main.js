const input = document.querySelector('input');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');


const searchTask = (e)=>{
    const searchText = e.target.value.toLowerCase()
    let tasks = [...li];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))
    console.log(tasks)
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li))

}
input.addEventListener('input', searchTask)