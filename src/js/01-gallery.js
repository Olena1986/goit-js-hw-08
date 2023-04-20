
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';



const galleryList = document.querySelector('.gallery');

const renderGallery = items => {
  const galleryItems = items.map(({ preview, original, description }) => `
    
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    
  `).join('');

  galleryList.insertAdjacentHTML('beforeend', galleryItems);
};

renderGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
});
