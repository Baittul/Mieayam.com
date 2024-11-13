
const scrollElements = document.querySelectorAll('.scroll-animation');

function scrollAnimation() {
  scrollElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', scrollAnimation);
document.addEventListener('DOMContentLoaded', scrollAnimation);
