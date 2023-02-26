import { GOOGLE_API_KEY } from '../apiKeys.js';

export function loadMap(functionNameString) {
  const googleUrl = document.getElementById('google-maps-api');
  googleUrl.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=${functionNameString}&v=weekly`;
}

let map;
export function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 52.5, lng: 5.3 },
    zoom: 6,
  });
}

export function updateMap(markersArray = [], userLocation) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: userLocation.latitude, lng: userLocation.longitude },
    zoom: 8,
  });

  markersArray.forEach((marker) => {
    marker.setMap(map);
  });

  if (userLocation) {
    const userMarker = new google.maps.Marker({
      position: new google.maps.LatLng(
        userLocation.latitude,
        userLocation.longitude
      ),

      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: '#00F',
        fillOpacity: 1,
        strokeWeight: 0,
        scale: 8,
      },
    });
    userMarker.setMap(map);
  }
}
