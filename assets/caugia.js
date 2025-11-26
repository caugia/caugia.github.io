/* Caugia Core Script — v1.1 */
// Fade-in bij scroll
const io = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
  { threshold: 0.15 }
);
document.querySelectorAll('section').forEach(s => io.observe(s));

// Body fade-in
window.addEventListener('load', () => document.body.classList.add('loaded'));

// Mobiel menu
const toggle = document.querySelector('.menu-toggle');
const mobile = document.querySelector('.nav-mobile');
if (toggle && mobile) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    mobile.classList.toggle('open');
  });
}
