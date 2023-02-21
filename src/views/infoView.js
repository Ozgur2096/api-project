import { CLOSE_INFO_BUTTON_ID, INFO_WINDOW_ID } from '../constants.js';

export const closeInfoElement = () => {
  const infoWindow = document.getElementById(INFO_WINDOW_ID);
  infoWindow.classList.remove('display-block');
};
