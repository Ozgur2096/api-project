// import { GOOGLE_API_KEY } from './apiKeys.js';
// const googleUrl = document.getElementById('google-maps-api');
// googleUrl.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initMap&v=weekly`;

// const url = 'https://api.gbif.org/v1/occurrence/search?year=2000,2023';
// const params = {
//   scientificName: 'Agaricus bisporus',
//   hasCoordinate: 'true',
//   limit: 300, // Increase the limit to max 300
// };

// const queryParams = new URLSearchParams(params).toString();
// const requestUrl = `${url}&${queryParams}`;

// fetch(requestUrl)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.results);
//   });

// let map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: { lat: 53.20139, lng: 5.80859 },
//     zoom: 8,
//   });
// }
// window.initMap = initMap;

import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  initWelcomePage();
};

window.addEventListener('load', loadApp);
