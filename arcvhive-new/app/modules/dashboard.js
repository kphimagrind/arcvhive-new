window.Dashboard = {
  init: async function(config) {
    var artikel  = await ArtikelService.getAll();
    var dokumen  = await DokumenService.getAll();
    var sipetra  = await SipetraService.getAll();
    var featured = artikel.slice(0, 4);
    var docs     = dokumen.slice(0, 4);
    var sheets   = sipetra.slice(0, 4);
    var categoryLinks = (config.categories || []).map(function(item) {
      return '<a class="category-pill" href="' + AppUtils.resolveLink('pages/kategori.html?slug=' + item.slug) + '">' + AppUtils.safe(item.name) + '</a>';
    }).join('');

    var artikelHtml = featured.length
      ? featured.map(function(item) { return Templates.cardArtikel(item); }).join('')
      : '<p class="empty-state">Belum ada artikel.</p>';

    var dokumenHtml = docs.length
      ? docs.map(function(item) { return Templates.cardDokumen(item); }).join('')
      : '<p class="empty-state">Belum ada dokumen.</p>';

    var sipetraHtml = sheets.length
      ? sheets.map(function(item) { return Templates.cardSipetra(item); }).join('')
      : '<p class="empty-state">Belum ada data SIPETRA.</p>';

    var html =
      Hero.render(config) +
      '<div class="page-content">' +
        '<section class="content-panel animate-fade">' +
          '<div class="section-header"><h2>Artikel Terbaru</h2></div>' +
          '<div class="grid-list">' + artikelHtml + '</div>' +
        '</section>' +
        '<section class="content-panel animate-fade">' +
          '<div class="section-header"><h2>Dokumen Terbaru</h2></div>' +
          '<div class="grid-list dokumen-grid">' + dokumenHtml + '</div>' +
        '</section>' +
        '<section class="content-panel animate-fade">' +
          '<div class="section-header"><h2>SIPETRA Terbaru</h2></div>' +
          '<div class="grid-list">' + sipetraHtml + '</div>' +
        '</section>' +
        '<section class="content-panel animate-fade">' +
          '<div class="section-header"><h2>Kategori</h2></div>' +
          '<div class="category-row">' + categoryLinks + '</div>' +
        '</section>' +
      '</div>';

    document.getElementById('page-content').innerHTML = html;
  }
};
