import {
  MAP_DIV_ID,
  SEARCH_BUTTON_ID,
  PLANT_PREVIEW_CONTAINER_ID,
} from '../constants.js';

export const createMainPageElement = () => {
  const element = document.createElement('div');

  element.innerHTML = String.raw`
    <div id=${MAP_DIV_ID}></div>
    <input type="text" placeholder="Enter Plant Name">
    <button id="${SEARCH_BUTTON_ID}">
      Search
    </button>
    <div id="${PLANT_PREVIEW_CONTAINER_ID}"></div>
    
  `;

  return element;
};
