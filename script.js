/* ============================================
   PORTFOLIO — Joyce Anne Atienza
   script.js
   ============================================ */

(function () {
  // Lightbox
  var dlg = document.getElementById('lb');
  var img = document.getElementById('lb-img');
  var cap = document.getElementById('lb-cap');

  document.querySelectorAll('.gshot').forEach(function (el) {
    el.addEventListener('click', function () {
      var thumb = el.querySelector('img');
      var label = el.querySelector('.gshot-label');
      img.src = thumb.src;
      img.alt = label ? label.textContent : '';
      cap.textContent = label ? label.textContent : '';
      dlg.showModal();
    });
  });

  document.querySelectorAll('[data-src]').forEach(function (el) {
    el.addEventListener('click', function () {
      img.src = el.getAttribute('data-src');
      img.alt = el.getAttribute('data-cap') || '';
      cap.textContent = el.getAttribute('data-cap') || '';
      dlg.showModal();
    });
  });

  document.getElementById('lb-close').addEventListener('click', function () {
    dlg.close();
  });

  dlg.addEventListener('click', function (e) {
    if (e.target === dlg) dlg.close();
  });

  dlg.addEventListener('cancel', function () {
    dlg.close();
  });

  // Hamburger menu
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
})();

function closeMenu() {
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('nav-links');
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
}