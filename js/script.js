var acc = document.getElementsByClassName("accordion");
var i;

for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function
    (){
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var panel = this.nextElementSibling;

        if(panel.style.display === "block"){
            panel.style.display = "none";
        }
        else{
            panel.style.display = "block";
        }
    });
}


    function initAutocomplete() {
      const cityInput = document.getElementById('city');
      const stateInput = document.getElementById('state');
      const countryInput = document.getElementById('country');

      const options = {
        types: ['(cities)'],
        componentRestrictions: { country: 'in' } // Restrict to a specific country if needed
      };

      // Initialize Autocomplete for City
      new google.maps.places.Autocomplete(cityInput, options);

      // Initialize Autocomplete for State
      // States are part of a specific country, so you can use a different approach or restrict based on country
      new google.maps.places.Autocomplete(stateInput, options);

      // Initialize Autocomplete for Country
      new google.maps.places.Autocomplete(countryInput, { types: ['(regions)'] });
    }

    // Initialize the Google Places Autocomplete when the window loads
    window.onload = initAutocomplete;

    window.onload = () => {
        if (typeof google === 'undefined') {
          console.error('Google Maps API not loaded');
        } else {
          initAutocomplete();
        }
      };

      let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();


document.getElementById('locationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  window.location.href = "/colleges.html";

  // Get the input values from the form
  const cityInput = document.getElementById('city').value.toLowerCase();
  const stateInput = document.getElementById('state').value.toLowerCase();
  const countryInput = document.getElementById('country').value.toLowerCase();

  localStorage.setItem('cityInput', cityInput);
  localStorage.setItem('stateInput', stateInput);
  localStorage.setItem('countryInput', countryInput);
  
  // Get all the college cards
  const collegeCards = document.querySelectorAll('.card');
  
  // Loop through the cards and check if they match the input
  collegeCards.forEach(card => {
      const city = card.querySelector('.city').textContent.toLowerCase().trim();
      const state = card.querySelector('.state').textContent.toLowerCase().trim();
      
      // Check if the college matches the city and state input (You can include country if needed)
      if (city.includes(cityInput) && state.includes(stateInput)) {
          card.style.display = 'block'; // Show the card
      } else {
          card.style.display = 'none'; // Hide the card
      }
  });
});