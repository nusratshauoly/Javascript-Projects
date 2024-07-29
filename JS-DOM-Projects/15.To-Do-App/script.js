/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 
 */

// Select elements & assign them to variables
let newTask = document.querySelector('#new-task'); // Select the input field for the new task and assign it to 'newTask'
let form = document.querySelector('form'); // Select the form element and assign it to 'form'
let todoUl = document.querySelector('#items'); // Select the ul element for incomplete tasks and assign it to 'todoUl'
let completeUl = document.querySelector('.complete-list ul'); // Select the ul element for completed tasks and assign it to 'completeUl'

// Function to create a new task item
let createTask = function(task) {
    let listItem = document.createElement('li'); // Create a new li element and assign it to 'listItem'
    listItem.className = 'item'; // Set the class of 'listItem' to 'item'

    let checkBox = document.createElement('input'); // Create a new input element and assign it to 'checkBox'
    checkBox.type = 'checkbox'; // Set the type of 'checkBox' to 'checkbox'

    let label = document.createElement('label'); // Create a new label element and assign it to 'label'
    label.innerText = task; // Set the text of 'label' to the 'task' parameter

    listItem.appendChild(checkBox); // Append 'checkBox' to 'listItem'
    listItem.appendChild(label); // Append 'label' to 'listItem'

    return listItem; // Return the 'listItem'
}

// Function to add a new task
let addTask = function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let listItem = createTask(newTask.value); // Create a new task item using the value from 'newTask' and assign it to 'listItem'
    todoUl.appendChild(listItem); // Append 'listItem' to 'todoUl'

    newTask.value = ""; // Clear the input field

    // Bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask); // Bind the 'completeTask' function to the checkbox change event for the new 'listItem'
}

// Function to handle task completion
let completeTask = function() {
    let listItem = this.parentNode; // Get the parent 'li' element of the checkbox and assign it to 'listItem'

    let deleteBtn = document.createElement('button'); // Create a new button element and assign it to 'deleteBtn'
    deleteBtn.innerText = 'Delete'; // Set the text of 'deleteBtn' to 'Delete'
    deleteBtn.className = 'delete'; // Set the class of 'deleteBtn' to 'delete'

    listItem.appendChild(deleteBtn); // Append 'deleteBtn' to 'listItem'

    let checkBox = listItem.querySelector('input[type="checkbox"]'); // Select the checkbox within 'listItem' and assign it to 'checkBox'
    checkBox.remove(); // Remove 'checkBox' from 'listItem'

    completeUl.appendChild(listItem); // Append 'listItem' to 'completeUl'

    bindCompleteItems(listItem, deleteTask); // Bind the 'deleteTask' function to the click event of 'deleteBtn' for the completed 'listItem'
}

// Function to handle task deletion
let deleteTask = function() {
    let listItem = this.parentNode; // Get the parent 'li' element of the delete button and assign it to 'listItem'
    let ul = listItem.parentNode; // Get the parent 'ul' element of 'listItem' and assign it to 'ul'
    ul.removeChild(listItem); // Remove 'listItem' from 'ul'
}

// Function to bind incomplete items with the completeTask function
let bindInCompleteItems = function(taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]'); // Select the checkbox within 'taskItem' and assign it to 'checkBox'
    checkBox.onchange = checkboxClick; // Set the 'onchange' event of 'checkBox' to 'checkboxClick'
}

// Function to bind completed items with the deleteTask function
let bindCompleteItems = function(taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete'); // Select the delete button within 'taskItem' and assign it to 'deleteButton'
    deleteButton.onclick = deleteButtonClick; // Set the 'onclick' event of 'deleteButton' to 'deleteButtonClick'
}

// Loop through each child element of 'todoUl' and bind it to the incomplete list
for(let i = 0; i < todoUl.children.length; i++) {
    bindInCompleteItems(todoUl.children[i], completeTask); // Bind the 'completeTask' function to each incomplete task
}

// Loop through each child element of 'completeUl' and bind it to the complete list
for(let i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i], deleteTask); // Bind the 'deleteTask' function to each completed task
}

// Add an event listener to the form for the 'submit' event and bind it to the 'addTask' function
form.addEventListener('submit', addTask);


//  // select elements & assign them to variables
//  let newTask = document.querySelector('#new-task');
//  let form = document.querySelector('form');
//  let todoUl = document.querySelector('#items');
//  let completeUl = document.querySelector('.complete-list ul');


// // functions
// let createTask = function(task) {
//     let listItem = document.createElement('li');
//     let checkBox = document.createElement('input');
//     let label = document.createElement('label');

//     label.innerText = task;
//     checkBox.type = 'checkbox';

//     listItem.appendChild(checkBox);
//     listItem.appendChild(label);

//     return listItem;
// }

// let addTask = function(event) {
//     event.preventDefault();
//     let listItem = createTask(newTask.value);
//     todoUl.appendChild(listItem);
//     newTask.value = "";
//     // bind the new list item to the incomplete list
//     bindInCompleteItems(listItem, completeTask);
// }

// let completeTask = function() {
//     let listItem = this.parentNode;
//     let deleteBtn = document.createElement('button');
//     deleteBtn.innerText = 'Delete';
//     deleteBtn.className = 'delete';
//     listItem.appendChild(deleteBtn);

//     let checkBox = listItem.querySelector('input[type="checkbox"]');
//     checkBox.remove();
//     completeUl.appendChild(listItem);
//     bindCompleteItems(listItem, deleteTask);
// }

// let deleteTask = function() {
//     let listItem = this.parentNode;
//     let ul = listItem.parentNode;
//     ul.removeChild(listItem);
// }

// let bindInCompleteItems = function(taskItem, checkboxClick) {
//     let checkBox = taskItem.querySelector('input[type="checkbox"]');
//     checkBox.onchange = checkboxClick;
// }

// let bindCompleteItems = function(taskItem, deleteButtonClick) {
//     let deleteButton = taskItem.querySelector('.delete');
//     deleteButton.onclick = deleteButtonClick;
// }

// for(let i=0; i< todoUl.children.length; i++ ) {
//     bindInCompleteItems(todoUl.children[i], completeTask);
// }

// for(let i=0; i< completeUl.children.length; i++ ) {
//     bindCompleteItems(completeUl.children[i], deleteTask);
// }

// form.addEventListener('submit', addTask);