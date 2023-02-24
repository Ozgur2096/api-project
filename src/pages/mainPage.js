import {
  DISPLAY_ON_MAP_CLASS,
  SEARCH_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createMainPageElement } from '../views/mainPageView.js';
import { openInfoWindow, showError } from './infoPage.js';
import { loadMap, initMap } from '../utilities/loadMap.js';
import { displayDataOnMap } from '../features/displayDataOnMap.js';
import { loadPreview } from '../features/loadPreview.js';
import { getUserGeoLocation } from '../features/displayUserLocation.js';

export const initMainPage = async () => {
  try {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    let userLocation = await getUserGeoLocation(); // undefined'ta sorun yok ama geolocation izni verilmezse program duruyor error handling lazim

    const mapElement = createMainPageElement();
    userInterface.appendChild(mapElement);
    loadMap();
    window.initMap = initMap;

    document
      .getElementById(SEARCH_BUTTON_ID)
      .addEventListener('click', async () => {
        await loadPreview();

        document
          .querySelectorAll(`.${DISPLAY_ON_MAP_CLASS}`)
          .forEach((button) => {
            button.addEventListener('click', (e) => {
              const scientificName = e.target.previousElementSibling.innerText;
              displayDataOnMap(scientificName, userLocation);
            });
          });
      });
  } catch (error) {
    openInfoWindow();
    showError(error);
  }
};
