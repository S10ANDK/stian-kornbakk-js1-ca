// const params = new URLSearchParams(queryString);

// const id = params.get("id");

const container = document.querySelector(".house-container");

const wizardHousesUrl = "https://wizard-world-api.herokuapp.com/Houses";

async function executeApiCall() {
  try {
    const response = await fetch(wizardHousesUrl);

    const results = await response.json();

    //    console.log(results);

    container.innerHTML = "";

    createHtml(results);
  } catch (error) {
    console.log("An error has occured");
  }
}

executeApiCall();

function createHtml(name) {
  console.log(name);
  name.forEach(function (results) {
    container.innerHTML += `<div class="wizard-houses">
                                <p class="house-name">${results.name}</p>
                                <p>Colour: ${results.houseColours}</p>
                                <p>Animal: ${results.animal}</p>
                                <p>Element: ${results.element}</p>
                                </div>`;
  });
}

createHtml("Hello");
