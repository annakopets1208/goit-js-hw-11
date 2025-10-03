import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('.form input');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(images => {
      hideLoader();
      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          class: 'my-toast',
        });
        return;
      }

      createGallery(images);
    })
    .catch(error => {
      hideLoader();
      console.error(error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong while fetching images!',
        position: 'topRight',
      });
    });
});
