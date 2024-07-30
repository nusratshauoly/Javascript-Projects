// Parse the JSON data into a JavaScript object
const milestonesData = JSON.parse(data).data;

// load course milestones data
// Function to load course milestones data
function loadMilestones() {
// Select the milestones container element
  const milestones = document.querySelector(".milestones");

    // Set the inner HTML of the milestones container
    // Map over each milestone and create HTML structure
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
      <!-- Map over each module within a milestone and create HTML structure -->
      <div class="hidden_panel">
        ${milestone.modules
          .map(function (module) {
            return `<div class="module border-b">
            <p>${module.name}</p>
          </div>`;
          })
          .join("")}
      </div>
    </div>`;
    })
    // Join all milestone HTML strings into one
    .join("")}`;
}

// Function to open and close milestones
function openMilestone(milestoneElement, id) {
    // Select the current panel (next sibling of the clicked milestone)
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    // Select the currently shown panel
    const shownPanel = document.querySelector(".show");
    // Select the currently active milestone
  const active = document.querySelector(".active");

    // first remove previous active class if any [other than the clicked one]
    // If there is an active milestone and it's not the clicked one, remove the active class
  if (active && !milestoneElement.classList.contains("active")) {
    active.classList.remove("active");
  }

    // toggle current clicked one
    // Toggle the active class on the clicked milestone
  milestoneElement.classList.toggle("active");

    // first hide previous panel if open [other than the clicked element]
    // If the current panel is not shown and there's another shown panel, hide it
  if (!currentPanel.classList.contains("show") && shownPanel)
    shownPanel.classList.remove("show");

    // toggle current element
    // Toggle the show class on the current panel
  currentPanel.classList.toggle("show");

    // Show the details of the clicked milestone
  showMilestone(id);
}


// Function to show milestone details
function showMilestone(id) {
    // Select the milestone image element
    const milestoneImage = document.querySelector(".milestoneImage");
    // Select the title element
    const name = document.querySelector(".title");
    // Select the details element
  const details = document.querySelector(".details");

    // Set the opacity of the milestone image to 0 (for smooth transition)
    milestoneImage.style.opacity = "0";
    // Set the source of the milestone image
    milestoneImage.src = milestonesData[id].image;
    // Set the name of the milestone
    name.innerText = milestonesData[id].name;
    // Set the details of the milestone
  details.innerText = milestonesData[id].description;
}

// listen for hero image load
// Listen for the milestone image load event
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function () {
    // Set the opacity of the image to 1 when it loads
  this.style.opacity = "1";
};


// Function to mark a milestone as done or not done
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
  }
}
// Load milestones data when the script runs
loadMilestones();