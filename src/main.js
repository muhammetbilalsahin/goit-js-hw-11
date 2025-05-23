// src/main.js
import './css/styles.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

import iziToast from 'izitoast';
import { fetchImages } from './js/pixabay-api';
import {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#search-form');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const query = form.searchQuery.value.trim();
    if (!query) return;

    clearGallery();
    showLoader();

    try {
      const response = await fetchImages(query);
      const images = response.hits;

      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      renderGallery(images);
    } catch (error) {
      iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    } finally {
      hideLoader();
    }
  });
});
