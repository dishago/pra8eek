const gallerySlides = document.querySelector('.gallery-slides');
const prevBtn = document.querySelector('.gallery-prev');
const nextBtn = document.querySelector('.gallery-next');

let currentIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-slide');
const itemWidth = galleryItems[0].offsetWidth;
let isMobile = window.innerWidth <= 767;

function showGalleryItems() {
  console.log('Showing gallery items...');
  const itemsPerSlide = isMobile ? 3 : 5;
  console.log('Items per slide:', itemsPerSlide);
  gallerySlides.style.transform = `translateX(-${currentIndex * itemWidth * itemsPerSlide}px)`;
}

prevBtn.addEventListener('click', () => {
  console.log('Previous button clicked');
  currentIndex = Math.max(currentIndex - 1, 0);
  showGalleryItems();
});

nextBtn.addEventListener('click', () => {
  console.log('Next button clicked');
  const itemsPerSlide = isMobile ? 3 : 5;
  currentIndex = Math.min(currentIndex + 1, Math.floor((galleryItems.length - 1) / itemsPerSlide));
  showGalleryItems();
});

window.addEventListener('resize', () => {
  console.log('Window resized');
  isMobile = window.innerWidth <= 767;
  showGalleryItems();
});

console.log('Initializing gallery...');
showGalleryItems();