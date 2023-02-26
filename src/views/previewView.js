import { DISPLAY_ON_MAP_CLASS } from '../constants.js';

export const createPreviewElement = () => {
  const element = document.createElement('div');
  element.className = 'plant-preview';

  element.innerHTML = String.raw`
    
  <button class="${DISPLAY_ON_MAP_CLASS}">On Map</button>
  <p></p>
  <img alt="no photo in database">
      
    
  `;

  return element;
};
