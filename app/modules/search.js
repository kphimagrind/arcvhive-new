window.SearchPage = {
  init: async function(config) {
    var q = AppUtils.qs('q', '');
    var results = await SearchService.search(q);
    var html = '<section class="content-panel animate-fade">' +
      Breadcrumb.render([{ label: 'Beranda', href: 'index.html' }, { label: 'Pencarian', href: 'pages/search.html' }]) +
      '<div class="page-heading"><h2>Hasil Pencarian</h2><p>Menampilkan hasil untuk <strong>' + AppUtils.safe(q) + '</strong>.</p></div>' +
      '<div class="search-summary">' +
        '<p>Artikel: ' + results.artikel.length + ' | Dokumen: ' + results.dokumen.length + ' | SIPETRA: ' + results.sipetra.length + '</p>' +
      '</div>' +
      '<div class="section-block"><h3>Artikel</h3><div class="grid-list">' + (results.artikel.length ? results.artikel.map(function(item) { return Templates.cardArtikel(item); }).join('') : '<p>Tidak ada artikel yang sesuai.</p>') + '</div></div>' +
      '<div class="section-block"><h3>Dokumen</h3><div class="grid-list">' + (results.dokumen.length ? results.dokumen.map(function(item) { return Templates.cardDokumen(item); }).join('') : '<p>Tidak ada dokumen yang sesuai.</p>') + '</div></div>' +
      '<div class="section-block"><h3>SIPETRA</h3><div class="grid-list">' + (results.sipetra.length ? results.sipetra.map(function(item) { return Templates.cardSipetra(item); }).join('') : '<p>Tidak ada data SIPETRA yang sesuai.</p>') + '</div></div>' +
      '</section>';
    document.getElementById('page-content').innerHTML = html;
  }
};
