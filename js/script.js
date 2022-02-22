const container = document.querySelector(".house-container");

const wizardHousesUrl = "https://wizard-world-api.herokuapp.com/Houses/";

async function executeApiCall() {
  try {
    const response = await fetch(wizardHousesUrl);

    const results = await response.json();

    container.innerHTML = "";

    createHtml(results);
  } catch (error) {
    console.log("An error has occured");
    container.innerHTML = errorMessage("An error has occured");
  }
}

executeApiCall();

function createHtml(name) {
  console.log(name);
  name.forEach(function (results) {
    container.innerHTML += `<div class="wizard-houses">
                            <a href="html/details.html">
                                <p class="house-name">${results.name}</p>
                                <p>Colour: ${results.houseColours}</p>
                                <p>Animal: ${results.animal}</p>
                                <p>Element: ${results.element}</p>
                            </a>
                            </div>`;
  });
}

createHtml("Hello");
