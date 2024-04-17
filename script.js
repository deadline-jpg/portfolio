const projectSlides = document.querySelector(".slides");

// Load project data for index.html
fetch("projects.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.data.forEach((element) => {
      printTile(element);
      //Add event listeners to all captions & close buttons
      const openBtnArr = document.querySelectorAll(".open-button");
      openBtnArr.forEach((openBtn) => {
        openBtn.addEventListener("click", function (event) {
          // Add class-name for full display
          openBtn.parentElement.classList.add("full-display");
        });
      });
      // Handle close buttons
      const closeBtnArr = document.querySelectorAll(".close-button");
      console.log(closeBtnArr);
      closeBtnArr.forEach((closeBtn) => {
        closeBtn.addEventListener("click", () => {
          closeBtn.parentElement.classList.remove("full-display");
          console.log(closeBtn.parentElement.classList);
        });
      });
    });
  });

// Print out projects to index.html
function printTile(element) {
  projectSlides.innerHTML += `
    <figure class="project-figure" id="slide-${element.id}">
                <img src="${element.img}" alt="project screenshot"
              />
              <figcaption class="caption">
                <?xml version="1.0" encoding="UTF-8"?>
                <svg class="close-button hidden" width="1200pt" height="1200pt" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
                 <path d="m600 300c79.566 0 155.87 31.605 212.13 87.867 56.262 56.262 87.867 132.57 87.867 212.13s-31.605 155.87-87.867 212.13c-56.262 56.262-132.57 87.867-212.13 87.867s-155.87-31.605-212.13-87.867c-56.262-56.262-87.867-132.57-87.867-212.13s31.605-155.87 87.867-212.13c56.262-56.262 132.57-87.867 212.13-87.867zm56.25 300 83.062-83.062c10.047-10.047 13.973-24.695 10.293-38.418-3.6758-13.727-14.398-24.449-28.125-28.125-13.723-3.6797-28.371 0.24609-38.418 10.293l-83.062 83.062-83.062-83.062c-10.047-10.047-24.695-13.973-38.418-10.293-13.727 3.6758-24.449 14.398-28.125 28.125-3.6797 13.723 0.24609 28.371 10.293 38.418l83.062 83.062-83.062 83.062c-10.047 10.047-13.973 24.695-10.293 38.418 3.6758 13.727 14.398 24.449 28.125 28.125 13.723 3.6797 28.371-0.24609 38.418-10.293l83.062-83.062 83.062 83.062c10.047 10.047 24.695 13.973 38.418 10.293 13.727-3.6758 24.449-14.398 28.125-28.125 3.6797-13.723-0.24609-28.371-10.293-38.418z"/>
                </svg>
                <div class="open-button">
                  <h3 class="project-name">${element.name}</h3>
                  <ul>
                    <li>${element.tech1}</li>
                    <li>${element.tech2}</li>
                    <li>${element.tech3}</li>
                  </ul>
                  <button class="sr-only">More Details</button>
                </div>
                  <div class="hidden">
                    <p>${element.para1}</p>
                    <p>${element.para2}</p>
                    <a href="${element.link}" target="_blank">
                <span
                  class="fa-brands fa-square-github"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Github</span>
              </a>
                  </div>
              </figcaption>
            </figure>`;
}
