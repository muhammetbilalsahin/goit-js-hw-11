// src/main.js
import './css/styles.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import { fetchImages } from './js/api';
import { createGalleryMarkup, showLoader, hideLoader } from './js/ui';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
let lightbox;

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = form.searchQuery.value.trim();

  if (!query) return;

  gallery.innerHTML = '';
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

    const markup = createGalleryMarkup(images);
    gallery.innerHTML = markup;

    if (!lightbox) {
      lightbox = new SimpleLightbox('.gallery a');
    } else {
      lightbox.refresh();
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
