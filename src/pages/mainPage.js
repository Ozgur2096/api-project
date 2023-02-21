import {
  OPEN_INFO_BUTTON_ID,
  SEARCH_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createMainPageElement } from '../views/mainPageView.js';
import { openInfoWindow } from './infoPage.js';
import { loadMap, initMap } from '../utilities/loadMap.js';
import { displayDataOnMap } from '../features/displayDataOnMap.js';

//async function
export const initMainPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const mapElement = createMainPageElement();
  userInterface.appendChild(mapElement);
  loadMap();
  window.initMap = initMap;
  // displayDataOnMap();

  document.getElementById(SEARCH_BUTTON_ID).addEventListener('click', () => {
    displayDataOnMap();
  });
  document
    .getElementById(OPEN_INFO_BUTTON_ID)
    .addEventListener('click', toTheInfoPage);
};

const toTheInfoPage = () => {
  openInfoWindow();
};
