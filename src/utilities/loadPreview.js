import { I_NATURALIST_URL, PLANT_PREVIEW_CONTAINER_ID } from '../constants.js';
import { pickAnElement } from './randomElementPicker.js';
import { createPreviewElement } from '../views/previewView.js';

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
    radius: 70, // km
  });
  const response = await fetch(`${apiUrl}?${params}`);
  const result = await response.json();
  const observations = result.results;

  const species = observations.map((obs) => obs.taxon);
  const scientificNamesArray = species.map((sp) => sp.name);
  const scientificNamesSet = new Set(scientificNamesArray);

  if ([...scientificNamesSet].length > 4)
    return [...scientificNamesSet].slice(0, 4);
  console.log([...scientificNamesSet]);
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
    radius: 70, // km
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
  const input = document.querySelector('input');
  const container = document.getElementById(PLANT_PREVIEW_CONTAINER_ID);
  const recommendedScientificNames = await getScientificNames(input.value);
  container.innerHTML = '';

  if (input.value) {
    recommendedScientificNames.forEach(async (scientificName, index) => {
      const previewElement = createPreviewElement();
      container.appendChild(previewElement);
      console.log(scientificName);
      container.children[index].lastElementChild.innerText = scientificName;
      let imageUrl = await getImageUrl(scientificName);
      container.children[index].firstElementChild.src = imageUrl;
    });
  }
};
