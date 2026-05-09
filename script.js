document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery img');
  if (!galleryImages.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.innerHTML = '<img alt="" />';
  document.body.appendChild(overlay);
  const overlayImg = overlay.querySelector('img');

  const open = (src) => {
    overlayImg.src = src;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  galleryImages.forEach((img) => {
    img.addEventListener('click', () => open(img.src));
  });

  overlay.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
});
