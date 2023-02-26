import {
  DISPLAY_ON_MAP_CLASS,
  SEARCH_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createMainPageElement } from '../views/mainPageView.js';
import { openInfoWindow, showError } from './infoPage.js';
import { loadMap, initMap, updateMap } from '../utilities/loadMap.js';
import { displayDataOnMap } from '../features/displayDataOnMap.js';
import { loadPreview } from '../features/loadPreview.js';
import { getUserGeoLocation } from '../features/displayUserLocation.js';

export const initMainPage = async () => {
  try {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    let userLocation = await getUserGeoLocation();

    const mapElement = createMainPageElement();
    userInterface.appendChild(mapElement);
    loadMap('initMap');
    window.initMap = initMap;

    document
      .getElementById(SEARCH_BUTTON_ID)
      .addEventListener('click', async () => {
        await loadPreview();

        document
          .querySelectorAll(`.${DISPLAY_ON_MAP_CLASS}`)
          .forEach((button) => {
            button.addEventListener('click', (e) => {
              const scientificName = e.target.nextElementSibling.innerText;
              loadMap('updateMap');
              window.updateMap = updateMap;
              displayDataOnMap(scientificName, userLocation);
            });
          });
      });
  } catch (error) {
    openInfoWindow();
    showError(error);
  }
};
