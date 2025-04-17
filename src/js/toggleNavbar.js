export function toggleNav() {
  const body = document.querySelector('body');
  const overlay = body.querySelector('.bg-overlay');

  body.addEventListener('click', function (e) {
    const navOpen = e.target.closest('.header__action-btn--menu');
    const navClose = e.target.closest('.navbar__close-btn');
    const navbar = this.querySelector('.navbar');

    if (navOpen) {
      navbar.classList.add('navbar--toggle');
      overlay.classList.add('bg-overlay--active');
      body.style.overflow = 'hidden';
    }

    if (navClose) {
      navbar.classList.remove('navbar--toggle');
      overlay.classList.remove('bg-overlay--active');
      body.style.overflow = 'auto';
    }
  });
}

toggleNav();
