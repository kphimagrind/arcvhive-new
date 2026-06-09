window.SipetraPage = {
  init: async function(config) {
    var id = AppUtils.qs('id');
    var items = await SipetraService.getAll();
    if (id) {
      var item = await SipetraService.getById(id);
      if (!item) {
        document.getElementById('page-content').innerHTML = '<section class="content-panel"><h2>Data SIPETRA tidak ditemukan</h2></section>';
        return;
      }
      document.getElementById('page-content').innerHTML = '<section class="content-panel animate-fade">' +
        Breadcrumb.render([{ label: 'Beranda', href: 'index.html' }, { label: 'SIPETRA', href: 'pages/sipetra.html' }, { label: item.title, href: 'pages/sipetra.html?id=' + id }]) +
        '<div class="page-heading"><h2>' + AppUtils.safe(item.title) + '</h2><p>' + AppUtils.safe(item.description) + '</p></div>' +
        '<div class="viewer-frame">' +
          '<iframe src="' + AppUtils.getAssetPath(item.file) + '" frameborder="0" aria-label="Spreadsheet viewer"></iframe>' +
        '</div>' +
      '</section>';
      return;
    }
    document.getElementById('page-content').innerHTML = '<section class="content-panel animate-fade">' +
      Breadcrumb.render([{ label: 'Beranda', href: 'index.html' }, { label: 'SIPETRA', href: 'pages/sipetra.html' }]) +
      '<div class="page-heading"><h2>SIPETRA</h2><p>Daftar data spreadsheet yang tersedia untuk ditelusuri.</p></div>' +
      '<div class="grid-list">' + items.map(function(item) { return Templates.cardSipetra(item); }).join('') + '</div>' +
    '</section>';
  }
};
