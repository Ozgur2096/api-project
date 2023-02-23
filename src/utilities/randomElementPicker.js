export function pickAnElement(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
