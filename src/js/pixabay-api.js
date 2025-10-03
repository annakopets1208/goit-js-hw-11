import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52544403-d4b110e344dc82246161e65d0';

function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      console.error(
        'Sorry, there are no images matching your search query. Please try again!',
        error
      );
      return [];
    });
}

export { getImagesByQuery };
