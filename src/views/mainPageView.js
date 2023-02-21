import {
  OPEN_INFO_BUTTON_ID,
  MAP_DIV_ID,
  SEARCH_BUTTON_ID,
} from '../constants.js';

export const createMainPageElement = () => {
  const element = document.createElement('div');

  element.innerHTML = String.raw`
    <h1>Main Page</h1>
    <div id=${MAP_DIV_ID}></div>
    <input type="text">
    <button id="${SEARCH_BUTTON_ID}">
      Search
    </button>
    <button id="${OPEN_INFO_BUTTON_ID}">
      More Information
    </button>
  `;

  return element;
};
