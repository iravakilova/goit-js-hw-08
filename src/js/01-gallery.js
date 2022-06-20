// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems
    .map(({ preview, original, description }) =>
        `<a class = 'gallery__item' href = '${original}'>
            <img class = 'gallery__image'
            src = ${preview}
            alt = ${description}
            />
        </a>`)
    .join(''); 
gallery.insertAdjacentHTML('beforeend', galleryItem);

gallery.addEventListener('click', clickImage);
function clickImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const lightbox = new SimpleLightbox('.gallery a', {
        event,
        captionSelector: 'img',
        captionsData: 'alt',
        captionDelay: 250,
        });
};
