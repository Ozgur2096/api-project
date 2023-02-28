import { I_NATURALIST_URL, PLANT_PREVIEW_CONTAINER_ID } from '../constants.js';
import { pickAnElement } from '../utilities/randomElementPicker.js';
import { createPreviewElement } from '../views/previewView.js';
import { openInfoWindow, showError } from '../pages/infoPage.js';

const getScientificNames = async (speciesName) => {
  const apiUrl = I_NATURALIST_URL;
  const params = new URLSearchParams({
    quality_grade: 'research',
    taxon_name: speciesName,
    per_page: 10,
    order: 'desc',
    order_by: 'created_at',
    locale: 'en',
    lat: 52,
    lng: 5.2,
    radius: 100, // km
  });
  const response = await fetch(`${apiUrl}?${params}`);
  const result = await response.json();
  const observations = result.results;
  if (observations.length === 0) {
    throw new Error('Enter a valid plant name, please.');
  }

  const species = observations.map((obs) => obs.taxon);
  const scientificNamesArray = species.map((sp) => sp.name);
  const scientificNamesSet = new Set(scientificNamesArray);

  if ([...scientificNamesSet].length > 3)
    return [...scientificNamesSet].slice(0, 3);
  return [...scientificNamesSet];
};

const getImageUrl = async (scientificNameOfThePlant) => {
  const apiUrl = I_NATURALIST_URL;
  const params = new URLSearchParams({
    quality_grade: 'research',
    taxon_name: scientificNameOfThePlant,
    per_page: 10,
    locale: 'en',
    lat: 52,
    lng: 5.2,
    radius: 100, // km
  });
  const response = await fetch(`${apiUrl}?${params}`);
  const data = await response.json();
  const observations = data.results;
  const recommendedPhotosArray = [];

  observations.forEach((observation) => {
    const photos = observation.photos;

    if (photos.length > 0) {
      const photoUrl = photos[0].url;
      recommendedPhotosArray.push(photoUrl);
    }
  });

  return pickAnElement(recommendedPhotosArray);
};

export const loadPreview = async () => {
  try {
    const input = document.querySelector('input');
    const container = document.getElementById(PLANT_PREVIEW_CONTAINER_ID);
    const recommendedScientificNames = await getScientificNames(input.value);
    container.innerHTML = '';

    if (input.value) {
      recommendedScientificNames.forEach(async (scientificName, index) => {
        const previewElement = createPreviewElement();
        container.appendChild(previewElement);
        container.children[index].children[1].innerText = scientificName;
        let imageUrl = await getImageUrl(scientificName);
        container.children[index].lastElementChild.src = imageUrl;
      });
    } else {
      throw new Error('Enter a plant name, please.');
    }
  } catch (error) {
    openInfoWindow();
    showError(error);
  }
};
