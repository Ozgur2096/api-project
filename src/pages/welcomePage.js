import { USER_INTERFACE_ID, CONTINUE_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initMainPage } from './mainPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(CONTINUE_BUTTON_ID)
    .addEventListener('click', startApplication);
};

const startApplication = () => {
  initMainPage();
};
