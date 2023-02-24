import { CONTINUE_BUTTON_ID } from '../constants.js';

export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.setAttribute('id', 'welcome-page');
  element.innerHTML = String.raw`
    <h1>Explore the World of Plants</h1>
    <p>This application helps photographers, botanists or any adventurers who like to spend time in nature. With this application, you can find information about a plant that you entered the name of and you can see the areas that the plant has been observed on the map. Enter the name of the plant, preferably scientific name, and explore nature.</p>
    <button id="${CONTINUE_BUTTON_ID}">Continue</button>
  `;
  return element;
};
