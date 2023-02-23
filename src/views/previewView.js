export const createPreviewElement = () => {
  const element = document.createElement('div');
  element.className = 'plant-preview';

  element.innerHTML = String.raw`
    
      <img alt="no photo in database">
      <p></p>
    
  `;

  return element;
};
