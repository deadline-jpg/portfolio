/* const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const figure = document.getElementById("project-container");
let clickCounter = 1;

// Fetch data from API
fetch("projects.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let firstProject = data.data[0];
    printProject(firstProject);
  });

//Print a project
function printProject(projectObj) {
  figure.innerHTML = `
    <h2>Projects</h2>
    <figure class="project--figure">
            <button class="arrow-button" id="left-arrow"><?xml version="1.0" encoding="UTF-8"?>
              <svg class="arrow" width="1200pt" height="1200pt" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
               <g>
                <path d="m600 912c171.6 0 312-140.4 312-312s-140.4-312-312-312-312 140.4-312 312 140.4 312 312 312zm0-600c158.4 0 288 129.6 288 288s-129.6 288-288 288-288-129.6-288-288 129.6-288 288-288z"/>
                <path d="m601.2 686.4 16.801 16.801 103.2-103.2-103.2-103.2-16.801 16.801 74.402 74.398h-180v24h180z"/>
               </g>
              </svg>
            </button>
            <a href="#">
              <img src="${projectObj.img}" alt="project screenshot"
            /></a>
            <button class="arrow-button" id="right-arrow"><?xml version="1.0" encoding="UTF-8"?>
              <svg class="arrow" width="1200pt" height="1200pt" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
               <g>
                <path d="m600 912c171.6 0 312-140.4 312-312s-140.4-312-312-312-312 140.4-312 312 140.4 312 312 312zm0-600c158.4 0 288 129.6 288 288s-129.6 288-288 288-288-129.6-288-288 129.6-288 288-288z"/>
                <path d="m601.2 686.4 16.801 16.801 103.2-103.2-103.2-103.2-16.801 16.801 74.402 74.398h-180v24h180z"/>
               </g>
              </svg>
            </button>
            <figcaption>
              <a href="#" target="_blank">
                <h3>${projectObj.name}</h3>
                <ul>
                  <li>${projectObj.tech1}</li>
                  <li>${projectObj.tech2}</li>
                  <li>${projectObj.tech3}</li>
                </ul>
              </a>
            </figcaption>
          </figure>`;
}

//Add event listeners to buttons
leftArrow.addEventListener("click", function (clickCounter) {
  if (clickCounter < 3) {
    clickCounter++;
  } else {
    clickCounter = 1;
  }
});

rightArrow.addEventListener("click", function (event) {
  console.log(clickCounter);
}); */
