import gallerys from './gallery-items.js';

const imgContainer = document.querySelector('.js-gallery');

const ollGallery = createImgGallery(gallerys);
imgContainer.insertAdjacentHTML('beforeend', ollGallery);

function createImgGallery(gallerys) {
   return gallerys
   .map(gallery => {
      return `
   <li class="gallery__item">
   <a
      class="gallery__link"
      href= "${gallery.original}"
      >
      <img class = "gallery-image"
      src = '${gallery.preview}'
      alt = '${gallery.description}'
      data-source="${gallery.original}"
      width = 392
      height = 240>
      </a>
   </li>
`;
   })
   .join(' ');
};
createImgGallery(gallerys);