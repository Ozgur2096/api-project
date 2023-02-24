import { GBIF_OCCURRENCE_URL } from '../constants.js';
import { fetchData } from '../utilities/fetchData.js';
import { initMap } from '../utilities/loadMap.js';

export function displayDataOnMap(
  scientificName,
  userLocation = { latitude: 52, longitude: 5.2 }
) {
  const params = {
    scientificName: scientificName,
    hasCoordinate: 'true',
    decimalLatitude: `${userLocation.latitude - 0.5},${
      userLocation.latitude + 0.5
    }`, // sensitivity can be changed
    decimalLongitude: `${userLocation.longitude - 0.5},${
      userLocation.longitude + 0.5
    }`, // sensitivity can be changed
    limit: 50, // maximum is 300
  };
  const queryParams = new URLSearchParams(params);
  const requestUrl = `${GBIF_OCCURRENCE_URL}&${queryParams}`;
  fetchData(requestUrl).then((data) => {
    const markersArray = data.results.map(
      (observation) =>
        new google.maps.Marker({
          position: new google.maps.LatLng(
            observation.decimalLatitude,
            observation.decimalLongitude
          ),
          icon: '../../public/images/leafIcon.png',
        })
    );
    initMap(markersArray, {
      latitude: userLocation.latitude,
      longitude: userLocation.longitude,
    });
  });
}
