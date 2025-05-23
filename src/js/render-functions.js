import SimpleLightbox from 'simplelightbox';

let lightbox;

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');

  const markup = images
    .map(
      img => `
        <li class="photo-card">
          <a href="${img.largeImageURL}">
            <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${img.likes}</p>
            <p><b>Views:</b> ${img.views}</p>
            <p><b>Comments:</b> ${img.comments}</p>
            <p><b>Downloads:</b> ${img.downloads}</p>
          </div>
        </li>
      `
    )
    .join('');

  gallery.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

export function showLoader() {
  const loader = document.querySelector('#loader');
  loader.classList.remove('hidden');
}

export function hideLoader() {
  const loader = document.querySelector('#loader');
  loader.classList.add('hidden');
}
