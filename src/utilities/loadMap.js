import { GOOGLE_API_KEY } from '../apiKeys.js';
import { getUserGeoLocation } from '../features/displayUserLocation.js';

export function loadMap() {
  const googleUrl = document.getElementById('google-maps-api');
  googleUrl.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initMap&v=weekly`;
}

let map;
export function initMap(markersArray = [], userLocation) {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 52.5, lng: 5.3 },
    zoom: 6,
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
