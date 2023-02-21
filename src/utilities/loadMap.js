import { GOOGLE_API_KEY } from '../apiKeys.js';

export function loadMap() {
  const googleUrl = document.getElementById('google-maps-api');
  googleUrl.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initMap&v=weekly`;
}

let map;
export function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 53.20139, lng: 5.80859 },
    zoom: 8,
  });
}
