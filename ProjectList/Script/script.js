const taskForm = document.getElementById("task-form")
const taskList = document.getElementById("task-list")

// add button
taskForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const taskItem = document.createElement("li")
    taskItem.classList.add('list-element-container')
    taskList.appendChild(taskItem)

    const taskText = document.createElement("input")
    taskText.setAttribute('id', 'task-input')
    taskText.setAttribute('type', 'text')
    taskText.setAttribute('class', 'input-block')
    taskItem.appendChild(taskText)

    let deleteButton = document.createElement("button")
    deleteButton.setAttribute('id', 'list-delete-button')
    deleteButton.setAttribute('class', 'list-element-delete-button')
    deleteButton.setAttribute('type', 'button')
    taskItem.appendChild(deleteButton)

    // delete element
    deleteButton = document.querySelectorAll("#list-delete-button")
    deleteButton.forEach((item) => {
        item.addEventListener('click', () => {
            item.parentElement.remove()
        })
    })
})

var taskArr = []
const inputDeleteButton = document.getElementById("input-delete-button")
inputDeleteButton.addEventListener('click', () => {
    const taskInput = document.querySelectorAll("#task-input")
    if (taskInput.length>1) {
    taskInput.forEach((item)=>{
        taskArr.push(item.value)
    })
    taskArr.splice(0,1)
    for (let i=0; i<taskArr.length; i++){
        taskInput[i].value = taskArr[i]
    }
    document.querySelector(".list-element-container:last-child").remove()
    taskArr.splice(0,taskArr.length)
    } else {
        taskInput.forEach((item)=>{
            item.value = ''
        })
    }
});

// sort increase/decrease
const sortButton = document.getElementById("sort-list")
var flag = true
sortButton.addEventListener('click', () => {
    if (flag === true) {
        sortButton.className = 'list-sort-increase'
        const taskInput = document.querySelectorAll("#task-input")
        taskInput.forEach((item) => {
            taskArr.push(item.value)
        })
        taskArr.sort((a, b) => a.localeCompare(b))
        for (let i=0; i<taskArr.length; i++){
            taskInput[i].value = taskArr[i]
        }
        flag = false
        taskArr.splice(0,taskArr.length)

    } else {
        sortButton.className = 'list-sort-decrease'
        const taskInput = document.querySelectorAll("#task-input")
        taskInput.forEach((item) => {
            taskArr.push(item.value)
        })
        taskArr.sort((a, b) => b.localeCompare(a))
        for (let i=0; i<taskArr.length; i++){
            taskInput[i].value = taskArr[i]
        }
        flag = true
        taskArr.splice(0,taskArr.length)
    }
})