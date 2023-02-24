import { DISPLAY_ON_MAP_CLASS } from '../constants.js';

export const createPreviewElement = () => {
  const element = document.createElement('div');
  element.className = 'plant-preview';

  element.innerHTML = String.raw`
    
      <img alt="no photo in database">
      <p></p>
      <button class="${DISPLAY_ON_MAP_CLASS}">On Map</button>
      
    
  `;

  return element;
};
