// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Active link highlighting based on path
  var links = document.querySelectorAll('.site-nav .nav-link');
  var path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href) return;
    var page = href.split('/').pop();
    if (page === path) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();


