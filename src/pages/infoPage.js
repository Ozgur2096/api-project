import { INFO_WINDOW_ID, CLOSE_INFO_BUTTON_ID } from '../constants.js';

const closeInfoElement = () => {
  const infoWindow = document.getElementById(INFO_WINDOW_ID);
  infoWindow.classList.remove('display-block');
};

export const openInfoWindow = () => {
  const infoWindow = document.getElementById(INFO_WINDOW_ID);
  infoWindow.classList.add('display-block');

  document
    .getElementById(CLOSE_INFO_BUTTON_ID)
    .addEventListener('click', closeInfoElement);
};

export const showError = (error) => {
  const errorMessageElement = document.getElementById('error-message');
  errorMessageElement.innerText = error.message;
};
