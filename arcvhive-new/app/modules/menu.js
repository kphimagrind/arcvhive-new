window.Menu = {
  init: function() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var lastScroll = 0;
    var threshold = 5;
    var headerHeight = header.offsetHeight;
    window.addEventListener('scroll', function() {
      var current = window.scrollY;
      if (Math.abs(current - lastScroll) <= threshold) return;
      if (current > lastScroll && current > headerHeight) {
        header.classList.add('scroll-up');
      } else {
        header.classList.remove('scroll-up');
      }
      lastScroll = current;
    });
  }
};
window.About = {
  init: async function(config) {
    var html = '<section class="content-panel animate-fade">' +
      Breadcrumb.render([{ label: 'Beranda', href: 'index.html' }, { label: 'Tentang', href: 'pages/tentang.html' }]) +
      '<div class="page-heading"><h2>Tentang Kebijakan Publik Archive</h2><p>Portal ini dibuat untuk mendokumentasikan kebijakan publik dan arsip organisasi secara mudah, transparan, dan bebas backend.</p></div>' +
      '<div class="panel-grid">' +
        '<div><h3>Visi</h3><p>Menjadi sumber arsip kebijakan publik yang terstruktur dan dapat diakses.</p></div>' +
        '<div><h3>Misi</h3><p>Menyediakan koleksi artikel, dokumen, dan data SIPETRA dalam satu portal.</p></div>' +
      '</div>' +
    '</section>';
    document.getElementById('page-content').innerHTML = html;
  }
};
