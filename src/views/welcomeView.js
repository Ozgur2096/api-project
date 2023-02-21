import { CONTINUE_BUTTON_ID } from '../constants.js';

export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Welcome</h1>
    <p>This application will help you...</p>
    <button id="${CONTINUE_BUTTON_ID}">Continue</button>
  `;
  return element;
};
