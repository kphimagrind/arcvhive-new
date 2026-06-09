window.Kategori = {
  init: async function(config) {
    var slug = AppUtils.qs('slug', 'informasi');
    var category = (config.categories || []).find(function(item) { return item.slug === slug; }) || { name: 'Semua', slug: slug };
    var artikel = await ArtikelService.filterByCategory(slug);
    var dokumen = await DokumenService.filterByCategory(slug);
    var sipetra = (await SipetraService.getAll()).filter(function(item) { return item.categorySlug === slug; });
    var html = '<section class="content-panel animate-fade">' +
      Breadcrumb.render([{ label: 'Beranda', href: 'index.html' }, { label: 'Kategori', href: 'pages/kategori.html' }, { label: category.name, href: 'pages/kategori.html?slug=' + slug }]) +
      '<div class="page-heading"><h2>Kategori: ' + AppUtils.safe(category.name) + '</h2><p>Menampilkan arsip dan sumber terkait kategori ' + AppUtils.safe(category.name) + '.</p></div>' +
      '<div class="section-block"><h3>Artikel</h3><div class="grid-list">' + (artikel.length ? artikel.map(function(item) { return Templates.cardArtikel(item); }).join('') : '<p>Tidak ada artikel untuk kategori ini.</p>') + '</div></div>' +
      '<div class="section-block"><h3>Dokumen</h3><div class="grid-list">' + (dokumen.length ? dokumen.map(function(item) { return Templates.cardDokumen(item); }).join('') : '<p>Tidak ada dokumen untuk kategori ini.</p>') + '</div></div>' +
      '<div class="section-block"><h3>SIPETRA</h3><div class="grid-list">' + (sipetra.length ? sipetra.map(function(item) { return Templates.cardSipetra(item); }).join('') : '<p>Tidak ada data SIPETRA untuk kategori ini.</p>') + '</div></div>' +
      '</section>';
    document.getElementById('page-content').innerHTML = html;
  }
};
