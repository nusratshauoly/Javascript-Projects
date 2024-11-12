// Parse the JSON data into a JavaScript object
const milestonesData = JSON.parse(data).data;

// Function to load course milestones data
function loadMilestones() {
  const milestones = document.querySelector(".milestones");
  
  milestones.innerHTML = `${milestonesData
    .map(function (milestone) {
      return `<div class="milestone border-b" id="${milestone._id}">
      <div class="flex">
        <div class="checkbox"><input type="checkbox" onclick="markMileStone(this, ${
          milestone._id
        })" /></div>
        <div onclick="openMilestone(this, ${milestone._id})">
          <p>
            ${milestone.name}
            <span><i class="fas fa-chevron-down"></i></span>
          </p>
        </div>
      </div>
      <div class="hidden_panel">
        ${milestone.modules
          .map(function(module) {
            return `<div class="module border-b">
            <p>${module.name}</p>
          </div>`;
          }).join("")}  
      </div>
    </div>`;
    })
    .join("")}`;
}

// Function to open and close milestones and show the modules inside the milestone
function openMilestone(milestoneElement, id) {
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    const shownPanel = document.querySelector(".show");
    const active = document.querySelector(".active");

//  first remove previous active class if any [other than the clicked one]
  if (active && !milestoneElement.classList.contains("active")) {
    active.classList.remove("active");
  }

  // toggle current clicked one
  milestoneElement.classList.toggle("active");

// first hide previous panel if open [other than the clicked element]
  if (!currentPanel.classList.contains("show") && shownPanel)
    shownPanel.classList.remove("show");

  // toggle current element
  currentPanel.classList.toggle("show");

  
  showMilestone(id);
}


// showing image of every milestone
function showMilestone(id) {
    const milestoneImage = document.querySelector(".milestoneImage");
    const name = document.querySelector(".title");
    const details = document.querySelector(".details");
    milestoneImage.style.opacity = "0";
  
  
    milestoneImage.src = milestonesData[id].image;
    name.innerText = milestonesData[id].name;
  details.innerText = milestonesData[id].description;
};

 // listen for hero image load
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function () {
  this.style.opacity = "1";
}



function markMileStone(checkbox, id) {
    const doneList = document.querySelector(".doneList");
    const milestonesList = document.querySelector(".milestones");
    const item = document.getElementById(id);
  
  
  if (checkbox.checked) {
    // mark as done
        milestonesList.removeChild(item);
        doneList.appendChild(item);
  } else {
    // back to main list
        milestonesList.appendChild(item);
        doneList.removeChild(item);
    
    reload();

  }
}
// task - do the sorting (.id) diye sort korte hobe
    // reload function likhe - reload list kore deya
      // -- write here: 
    // Function to sort milestones by ID in ascending order
function reload() {
  const milestonesList = document.querySelector(".milestones");
  
  // Convert the HTMLCollection to an array to use array methods like sort
  const elementsArray = Array.from(milestonesList.children);

  // Sort elements based on the numerical value of their IDs
  elementsArray.sort((a, b) => {
    return Number(a.id) - Number(b.id);
  });

  // Append elements back to milestonesList in sorted order
  elementsArray.forEach(element => {
    milestonesList.appendChild(element);
  });
}

loadMilestones();




// --------------------------------- comment in code -------------------------

// Parse the JSON data into a JavaScript object and file er vitor data name e object ache tai (.data) ja (jsoneditoronline.org) theke convert kore nibo 
const milestonesData = JSON.parse(data).data;

// load course milestones data
// Function to load course milestones data
function loadMilestones() {
// Select the milestones container element
  const milestones = document.querySelector(".milestones");

  // Set the inner HTML of the milestones container
  
  // Map over each milestone and create HTML structure and return korbe jei element ta loop korbe sheta
  
  // here id="${milestone._id}" is the id of milestone image

    // Set the inner HTML of the milestones container
  // Map over each milestone and create HTML structure  --- --- normally loop korle each object er por (,) boshe then notun object start hoy .map() is ideal here because it allows us to iterate through each milestone in a clean, functional way, transforming each item in milestonesData into structured HTML aray without needing extra loops or temporary variables. and map receive kore function tai ekhane function nibo and each objec er vitor ekta kore milestone jabe tai ekhane paramater hishebe (milestone) niyechi
  
  milestones.innerHTML = `${milestonesData
    .map(function (milestone) {
      // Create HTML structure for each milestone , ${milestone._id} here for milestone number and return korbe jei element ta loop korbe sheta
      return `<div class="milestone border-b" id="${milestone._id}">
      <div class="flex">
  <!-- Create a checkbox for marking the milestone as done, calling markMileStone function on click -->
        <div class="checkbox"><input type="checkbox" onclick="markMileStone(this, ${
          milestone._id
        })" /></div>
        <!-- Clickable area for opening the milestone details, calling openMilestone function on click -->
        <div onclick="openMilestone(this, ${milestone._id})">
          <p>
          <!-- Display the milestone name -->
            ${milestone.name}
            <!-- Icon for expanding/collapsing milestone details -->
            <span><i class="fas fa-chevron-down"></i></span>
          </p>
        </div>
      </div>
      <!-- Map over each module within a milestone and create module HTML structure and create name in module -->
      <!-- Map over each module within a milestone and create HTML structure -->
      <!-- Hidden panel that contains the list of modules within the milestone -->
      <div class="hidden_panel">
        ${milestone.modules
        .map(function (module) {
            // Create HTML structure for each module within the milestone
          return `<div class="module border-b">
             <!-- Display the module name -->
            <p>${module.name}</p>
          </div>`;
          // Join all module HTML strings into one to form the complete hidden panel content --- // using join("") with empty string, we can remove (,) after every array
          }).join("")}
      </div>
    </div>`;
    })
    // Join all milestone HTML strings into one to form the complete content of the milestones container
    .join("")}`;
}

// Function to open and close milestones
function openMilestone(milestoneElement, id) {
    // full milestone ta copy korbo jate each milestone e click korle open hoy module gulo Select the current panel er parent node take nibo and er sibling take nibo(next sibling of the clicked milestone) --- milestone ta click korar por er vitor j hidden module ache ta show korar jonno
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    // Select the currently shown panel --- add (show) class to the (hidden_panel) class so that the content can be shown inside the milestone
    const shownPanel = document.querySelector(".show");
    // Select the currently active milestone and make its font bold so that understand it is currently selected milestone
  const active = document.querySelector(".active");

  // first remove previous active class if any other than the clicked one
    // first remove previous active class if any [other than the clicked one]
    // If there is an active milestone that is already open and it's not the clicked one, remove the active class
  if (active && !milestoneElement.classList.contains("active")) {
    active.classList.remove("active");
  }

  // ** (toggle) use when button is closed by click it will open, and it is opened by click it will close. 
    // toggle current clicked one 
    // Toggle the active class on the clicked milestone so that its font will be bold
  milestoneElement.classList.toggle("active");


  // first hide previous panel if open [other than the clicked element]
    // first hide previous panel if open [other than the clicked element]
    // If the current panel is not shown and there's another shown panel, hide it
  if (!currentPanel.classList.contains("show") && shownPanel)
    shownPanel.classList.remove("show");

    // toggle current element
    // Toggle the show class on the current panel jate (open) tick e clicke korle vitorer module gulo show kore abar show thakle click korle hide hoye jabe er jonno toggle use kora hoyeche.
  currentPanel.classList.toggle("show");

  // calling the show milestone so that when milestone clicked the image will be changed
    // Show the details image of the clicked milestone we use id cause every milestone image id is different
  showMilestone(id);
}


// Function to show milestone details (when click the new milestone the cover image will appear)
function showMilestone(id) {
    // Select the milestone image element
    const milestoneImage = document.querySelector(".milestoneImage");
    // Select the title element
    const name = document.querySelector(".title");
    // Select the details element
  const details = document.querySelector(".details");


  // jokhon 1 milestone theke onno milestone e click korbo tokhon first ei previous milestone er image opacity 0 kore felbo then j milestone e click korbo shei milestone er image opacity 1 kore dibo
    // Set the opacity of the milestone image to 0 (for smooth transition) so that when click next image can appear
    milestoneImage.style.opacity = "0";
  // Set the source of the milestone image
  // data.js (jsoneditoronline.js) er milestoneData er id and image and name and description 
    milestoneImage.src = milestonesData[id].image;
    // Set the name of the milestone
    name.innerText = milestonesData[id].name;
    // Set the details of the milestone
  details.innerText = milestonesData[id].description;
}

// listen for hero image load
// Listen for the milestone image load event
const milestoneImage = document.querySelector(".milestoneImage");
// kono image load hoyeche kina dekhar jonno (onload) use korbo
milestoneImage.onload = function () {
    // Set the opacity of the image to 1 when it loads so that when click image can appear
  this.style.opacity = "1";
};


// Function to check mark a milestone as done or not done and give each milestone div a unique id number
function markMileStone(checkbox, id) {
    // Select the done list container
    const doneList = document.querySelector(".doneList");
    // Select the milestones list container
    const milestonesList = document.querySelector(".milestones");
    // Select the specific milestone element by its ID
  const item = document.getElementById(id);

    // If the checkbox is checked (milestone is marked as done)
    if (checkbox.checked) {
      // Remove the milestone from the main list
    // mark as done
        milestonesList.removeChild(item);
        // Add the milestone to the done list
    doneList.appendChild(item);
    } else {
        // If the checkbox is unchecked (milestone is not done)
    // Add the milestone back to the main list
    // back to main list
        milestonesList.appendChild(item);
        // Remove the milestone from the done list
    doneList.removeChild(item);

    // task - do the sorting
      // reload list
      // ._id diye sort korte hobe, full milestone er data ta loop kore cholchilo , r ekhane puro data ta reload kore dite hobe
      // reload function likhte hobe and reload list korte hobe.
  }
}
// Load milestones data when the script runs
loadMilestones();