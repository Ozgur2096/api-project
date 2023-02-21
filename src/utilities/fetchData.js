export const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Something went wrong');

  return response.json();
};
