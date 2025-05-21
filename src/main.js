import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('#loader');
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
      iziToast.warning({
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

function createGalleryMarkup(images) {
  return images
    .map(
      img => `
    <a href="${img.largeImageURL}" class="photo-card">
      <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
      <div class="info">
        <p><b>Likes:</b> ${img.likes}</p>
        <p><b>Views:</b> ${img.views}</p>
        <p><b>Comments:</b> ${img.comments}</p>
        <p><b>Downloads:</b> ${img.downloads}</p>
      </div>
    </a>`
    )
    .join('');
}

function showLoader() {
  loader.classList.remove('hidden');
}
function hideLoader() {
  loader.classList.add('hidden');
}

async function fetchImages(query) {
  const API_KEY = '50349576-73448956e16d67ea550d7c551';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;
  const { data } = await axios.get(URL);
  return data;
}
