import { GBIF_OCCURRENCE_URL } from '../constants.js';
import { fetchData } from '../utilities/fetchData.js';

export function displayDataOnMap() {
  const inputElement = document.querySelector('input');

  const params = {
    scientificName: `${inputElement.value}`,
    hasCoordinate: 'true',
    limit: 300, // Increase the limit to 300 (this is maximum)
  };
  const queryParams = new URLSearchParams(params).toString();
  const requestUrl = `${GBIF_OCCURRENCE_URL}&${queryParams}`;
  fetchData(requestUrl).then(console.log);
}
