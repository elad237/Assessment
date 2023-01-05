import fetch from '../src/module/comments/getComments.js';

const getItems = async (searchQuery) => {
  const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${searchQuery}`,
  );
  const myJson = await response.json();
  return myJson;
};

export default getItems;
