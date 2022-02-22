const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

HTMLFormControlsCollection.log(params);

const id = params.get("id");

const url = "https://wizard-world-api.herokuapp.com/Houses/0367baf3-1cb6-4baf-bede-48e17e1cd005";

const detailsContainer = document.querySelector(".details-container")

async function fetchHouse() {
   
   try {
      const response = await fetch(url);
      const details = await response.json();
   
      console.log(details);
   
      detailsContainer.innerHTML = "";
   
      detailsContainer.innerHTML = `<h1>${details.name}</h1>
                                    <div class="detail-content">
                                    <p>House Colours: ${details.houseColours}</p>
                                    <p>Founder: ${details.founder}</p>
                                    <p>Animal: ${details.animal}</p>
                                    <p>Element: ${details.element}</p>
                                    <p>Ghost: ${details.ghost}</p>
                                    <p>Common Room: ${details.commonRoom}</p>
                                    </div>
                                    <div class="view-houses-container">
                                    <a href="../index.html" class="other-houses-link">View other houses</a>
                                    </div>` 
   }
   catch {
      console.log("An error has occured");
      detailsContainer.innerHTML = errorMessage("An error has occured");
   }

}

fetchHouse();