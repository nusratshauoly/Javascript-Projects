/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do applicatio
 */
// Select elements & assign them to variables
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items'); 
let completeUl = document.querySelector('.complete-list ul');

// Function to create a new task item
let createTask = function(task) {
    let listItem = document.createElement('li');
    listItem.className = 'item';

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    let label = document.createElement('label');
    label.innerText = task;

    listItem.appendChild(checkBox);
    listItem.appendChild(label); 

    return listItem;
}

// Function to add a new task
let addTask = function(event) {
    event.preventDefault();

    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);

    newTask.value = "";
    bindInCompleteItems(listItem, completeTask);
}

// Function to handle task completion
let completeTask = function() {
    let listItem = this.parentNode;

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';

    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]'); 
    checkBox.remove(); 

    completeUl.appendChild(listItem);

    bindCompleteItems(listItem, deleteTask);
}

// Function to handle task deletion
let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

// Function to bind incomplete items with the completeTask function
let bindInCompleteItems = function(taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]'); 
    checkBox.onchange = checkboxClick; 
}

// Function to bind completed items with the deleteTask function
let bindCompleteItems = function(taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete'); 
    deleteButton.onclick = deleteButtonClick;
}

// Loop through each child element of 'todoUl' and bind it to the incomplete list (3 list items tast in html)
for(let i = 0; i < todoUl.children.length; i++) {
    bindInCompleteItems(todoUl.children[i], completeTask);
}

// Loop through each child element of 'completeUl' and bind it to the complete list
for(let i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

// Add an event listener to the form for the 'submit' event and bind it to the 'addTask' function
form.addEventListener('submit', addTask);










// // --------------------- comment in code ----------------

// // Select elements & assign them to variables
// let newTask = document.querySelector('#new-task'); // Select the input field for the new task and assign it to 'newTask'
// let form = document.querySelector('form'); // Select the form element and assign it to 'form'
// let todoUl = document.querySelector('#items'); // Select the ul element for incomplete tasks and assign it to 'todoUl'
// let completeUl = document.querySelector('.complete-list ul'); // Select the ul element for completed tasks and assign it to 'completeUl'

// // Function to create a new task item
// let createTask = function(task) {
//     let listItem = document.createElement('li'); // Create a new li element and assign it to 'listItem'
//     listItem.className = 'item'; // Set the class of 'listItem' to 'item'

//     let checkBox = document.createElement('input'); // Create a new input element and assign it to 'checkBox'
//     checkBox.type = 'checkbox'; // Set the type of 'checkBox' to 'checkbox'

//     let label = document.createElement('label'); // Create a new label element and assign it to 'label'
//     label.innerText = task; // Set the text of 'label' to the 'task' parameter

//     listItem.appendChild(checkBox); // Append 'checkBox' to 'listItem'
//     listItem.appendChild(label); // Append 'label' to 'listItem'

//     return listItem; // Return the 'listItem'
// }

// // Function to add a new task
// let addTask = function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior (so that it don't reload instantly after submiting input)

//     let listItem = createTask(newTask.value); // Create a new task item using the value from 'newTask' variable and assign it to 'listItem' (call the createTask function here)
//     todoUl.appendChild(listItem); // Append 'listItem' to 'todoUl'

//     newTask.value = ""; // Clear the input field of (newTask)

//     // Bind the new list item to the incomplete list
//     bindInCompleteItems(listItem, completeTask); // Bind the 'completeTask' function to the checkbox change event for the new 'listItem'
// }

// // Function to handle task completion
// let completeTask = function() {
//     let listItem = this.parentNode; // Get the parent 'li' element of the checkbox and assign it to 'listItem'

//     let deleteBtn = document.createElement('button'); // Create a new button element and assign it to 'deleteBtn'
//     deleteBtn.innerText = 'Delete'; // Set the text of 'deleteBtn' to 'Delete'
//     deleteBtn.className = 'delete'; // Set the class of 'deleteBtn' to 'delete'

//     listItem.appendChild(deleteBtn); // Append 'deleteBtn' to 'listItem'

//     let checkBox = listItem.querySelector('input[type="checkbox"]'); // Select the checkbox within 'listItem' and assign it to 'checkBox'
//     checkBox.remove(); // Remove 'checkBox' from 'listItem' (completed task e checkbox add hobena)

//     completeUl.appendChild(listItem); // Append 'listItem' to 'completeUl'

//     bindCompleteItems(listItem, deleteTask); // Bind the 'deleteTask' function to the click event of 'deleteBtn' for the completed 'listItem'
// }

// // Function to handle task deletion
// let deleteTask = function() {
//     let listItem = this.parentNode; // Get the parent 'li' element of the delete button and assign it to 'listItem'
//     let ul = listItem.parentNode; // Get the parent 'ul' element of 'listItem' and assign it to 'ul'
//     ul.removeChild(listItem); // Remove 'listItem' from 'ul'
// }

// // Function to bind incomplete items with the completeTask function
// let bindInCompleteItems = function(taskItem, checkboxClick) {
//     let checkBox = taskItem.querySelector('input[type="checkbox"]'); // Select the checkbox within 'taskItem' and assign it to 'checkBox'
//     checkBox.onchange = checkboxClick; // Set the 'onchange' event of 'checkBox' to 'checkboxClick'
// }

// // Function to bind completed items with the deleteTask function
// let bindCompleteItems = function(taskItem, deleteButtonClick) {
//     let deleteButton = taskItem.querySelector('.delete'); // Select the delete button within 'taskItem' and assign it to 'deleteButton'
//     deleteButton.onclick = deleteButtonClick; // Set the 'onclick' event of 'deleteButton' to 'deleteButtonClick'
// }

// // Loop through each child element of 'todoUl' and bind it to the incomplete list (3 list items test in html)
// for(let i = 0; i < todoUl.children.length; i++) {
//     bindInCompleteItems(todoUl.children[i], completeTask); // Bind the 'completeTask' function to each incomplete task
// }

// // Loop through each child element of 'completeUl' and bind it to the complete list
// for(let i = 0; i < completeUl.children.length; i++) {
//     bindCompleteItems(completeUl.children[i], deleteTask); // Bind the 'deleteTask' function to each completed task
// }

// // Add an event listener to the form for the 'submit' event and bind it to the 'addTask' function
// form.addEventListener('submit', addTask);







// ----------------------- updated code from --------------------------------



// 'use strict';

// let form = document.querySelector('form');
// let newTask = document.querySelector('#new-task');
// let todoUl = document.querySelector('.todo-list');
// let completeUl = document.querySelector('.complete-list');

// // Create a new task
// const createTask = function (task) {
//     let listItem = document.createElement('li');
//     listItem.className = 'item';

//     let checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';

//     let label = document.createElement('label');
//     label.innerText = task;

//     listItem.appendChild(checkbox);
//     listItem.appendChild(label);

//     return listItem;
// }

// // Add task
// const addTask = function (event) {
//     event.preventDefault();

//     if (newTask.value.trim() === '') return; // Prevent adding empty tasks

//     let listItem = createTask(newTask.value);
//     todoUl.appendChild(listItem);

//     newTask.value = '';
//     bindIncompleteItems(listItem, completeTask);
// }

// // Complete task
// const completeTask = function () {
//     let listItem = this.parentNode;

//     let deleteBtn = document.createElement('button');
//     deleteBtn.innerText = 'Delete';
//     deleteBtn.className = 'delete';

//     let checkbox = listItem.querySelector('input[type="checkbox"]');
//     if (checkbox) {
//         checkbox.remove(); // Remove checkbox after completion
//     }

//     listItem.appendChild(deleteBtn); // Add the delete button
//     completeUl.appendChild(listItem); // Move the task to the complete list

//     bindCompleteItems(listItem, deleteTask);
// }

// // Delete task
// const deleteTask = function () {
//     let listItem = this.parentNode;
//     let ul = listItem.parentNode;
//     ul.removeChild(listItem);
// }

// // Bind incomplete items to completeTask
// const bindIncompleteItems = function (taskItem, checkboxClick) {
//     let checkbox = taskItem.querySelector('input[type="checkbox"]');
//     if (checkbox) {
//         checkbox.onchange = checkboxClick; // Bind the onchange event to the checkbox
//     } else {
//         console.error('No checkbox found for:', taskItem);
//     }
// }

// // Bind complete items to deleteTask
// const bindCompleteItems = function (taskItem, clickDeleteButton) {
//     let deleteBtn = taskItem.querySelector('.delete');
//     if (deleteBtn) {
//         deleteBtn.onclick = clickDeleteButton; // Bind the click event to the delete button
//     } else {
//         console.error('No delete button found for:', taskItem);
//     }
// }

// // Initialize existing tasks in the todo list
// for (let i = 0; i < todoUl.children.length; i++) {
//     bindIncompleteItems(todoUl.children[i], completeTask);
// }

// // Initialize existing tasks in the complete list
// for (let i = 0; i < completeUl.children.length; i++) {
//     bindCompleteItems(completeUl.children[i], deleteTask);
// }

// // Handle form submission
// form.addEventListener('submit', addTask);
