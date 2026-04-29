function openLightbox(src) {
  document.getElementById('lightboxImage').src = src;
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  if (
    event.target.id === 'lightbox' ||
    event.target.classList.contains('lightbox-close')
  ) {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }
});