const projectSlides = document.querySelector(".slides");

// Load project data for index.html
fetch("projects.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    data.data.forEach((element) => {
      printTile(element);
    });
  });

// Print out projects
function printTile(element) {
  projectSlides.innerHTML += `
    <figure class="project--figure" id="slide-${element.id}">
              <a href="projects.html">
                <img src="${element.img}" alt="project screenshot"
              /></a>
              <figcaption>
                <a href="projects.html" target="_blank">
                  <h3>${element.name}</h3>
                  <ul>
                    <li>${element.tech1}</li>
                    <li>${element.tech2}</li>
                    <li>${element.tech3}</li>
                  </ul>
                </a>
              </figcaption>
            </figure>`;
}

// Add event listener to buttons
