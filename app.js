// Age Gate
function enterSite() {
  document.getElementById('age-gate').style.display = 'none';
  document.getElementById('main-site').classList.remove('hidden');
  localStorage.setItem('estrella_age_verified', '1');
}

// Comprobar si ya verificó la edad
(function () {
  if (localStorage.getItem('estrella_age_verified') === '1') {
    const gate = document.getElementById('age-gate');
    const site = document.getElementById('main-site');
    if (gate) gate.style.display = 'none';
    if (site) site.classList.remove('hidden');
  }
})();

// Menú móvil
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('hidden');
}

// Cerrar menú móvil al hacer clic en un enlace
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav__mobile a').forEach(function (link) {
    link.addEventListener('click', function () {
      const menu = document.getElementById('mobile-menu');
      if (menu) menu.classList.add('hidden');
    });
  });
});

// Formulario de contacto
function handleForm(event) {
  event.preventDefault();
  const form = event.target;
  const success = document.getElementById('form-success');
  form.classList.add('hidden');
  if (success) success.classList.remove('hidden');
}

// Smooth reveal on scroll (simple intersection observer)
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.plan, .video-card, .social-card, .gallery-item').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });
});
