import { INFO_WINDOW_ID, CLOSE_INFO_BUTTON_ID } from '../constants.js';
import { closeInfoElement } from '../views/infoView.js';

export const openInfoWindow = () => {
  const infoWindow = document.getElementById(INFO_WINDOW_ID);
  infoWindow.classList.add('display-block');

  document
    .getElementById(CLOSE_INFO_BUTTON_ID)
    .addEventListener('click', closeInfo);
};

const closeInfo = () => {
  closeInfoElement();
};
