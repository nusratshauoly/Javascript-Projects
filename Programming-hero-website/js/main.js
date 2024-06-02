//1. js file e JSON file niye kaj kora jayna, er jonno first e original javascript object e convert korte hobe (JSON.parse) diye. file ta dile sheta diye js file e kaj korte pari. (.data) mane holo ei file er milestone e joto data ase(15 ta data) shob show korbe.
const milestonesData = JSON.parse(data).data;

//3. load course milestones data
function loadMilestones() {
  const milestones = document.querySelector(".milestones");

    // 4. copy and paste from (index.html)
    milestones.innerHTML = ` ${milestonesData}.map(function (milestone) {
        return ` <div class="milestone border-b">
                        <div class="flex">
                            <div class="checkbox"><input
                                    type="checkbox" /></div>
                            <div>
                                <p>
                                    ${milestone.name}
                                    <span><i
                                            class="fas fa-chevron-down"></i></span>
                                </p>
                            </div>
                        </div>
                        <div class="hidden_panel">
                            ${milestone.modules.map(function (module) {
                                return `
                                    <div class="module border-b">
                                    <p>${module.name}</p>
                                    </div>
                                `
                                
                            }).join("")}
                            </div>
                        </div>
                    </div>`
        
    })join("")};
       
    `;
      
}
loadMilestones();


  // first remove previous active class if any [other than the clicked one]
  

  // toggle current clicked one


  // first hide previous panel if open [other than the clicked element]
 

  // toggle current element
 

  


// listen for hero image load


