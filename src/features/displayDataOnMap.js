import { GBIF_OCCURRENCE_URL } from '../constants.js';
import { fetchData } from '../utilities/fetchData.js';
import { updateMap } from '../utilities/loadMap.js';
import { openInfoWindow, showError } from '../pages/infoPage.js';

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
    limit: 80, // maximum is 300
  };
  const queryParams = new URLSearchParams(params);
  const requestUrl = `${GBIF_OCCURRENCE_URL}&${queryParams}`;
  fetchData(requestUrl)
    .then((data) => {
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

      updateMap(markersArray, {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
      });
    })
    .catch((error) => {
      openInfoWindow();
      showError(error);
    });
}
