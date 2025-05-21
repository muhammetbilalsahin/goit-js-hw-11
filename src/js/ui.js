// src/ui.js

export function createGalleryMarkup(images) {
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

export function showLoader() {
  const loader = document.querySelector('#loader');
  loader.classList.remove('hidden');
}

export function hideLoader() {
  const loader = document.querySelector('#loader');
  loader.classList.add('hidden');
}
