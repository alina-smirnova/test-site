function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Показать кнопку при прокрутке вниз
window.onscroll = function () {
  let btn = document.getElementById("topBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Плавная прокрутка вверх
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
