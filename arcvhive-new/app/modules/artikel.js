window.ArtikelPage = {
  init: async function(config) {
    var id = AppUtils.qs('id');
    var article = await ArtikelService.getById(id);
    if (!article) {
      document.getElementById('page-content').innerHTML = '<section class="content-panel"><h2>Artikel tidak ditemukan</h2><p>Periksa kembali tautan atau pilih artikel lain dari halaman utama.</p></section>';
      return;
    }
    var content = '<p>Konten artikel tidak dapat dimuat.</p>';
    try {
      content = await DataLoader.loadHtml(article.file);
    } catch (error) {
      console.warn(error);
    }
    var html = '<section class="content-panel animate-fade">' +
      Breadcrumb.render([{ label: 'Beranda', href: 'index.html' }, { label: article.category, href: 'pages/kategori.html?slug=' + article.categorySlug }, { label: article.title, href: 'pages/artikel.html?id=' + id }]) +
      '<div class="article-header">' +
        '<h2>' + AppUtils.safe(article.title) + '</h2>' +
        '<p class="article-meta">' + AppUtils.safe(article.author) + ' · ' + AppUtils.formatDate(article.date) + '</p>' +
        '<div class="article-thumbnail"><img src="' + AppUtils.getAssetPath(article.thumbnail) + '" alt="' + AppUtils.safe(article.title) + '"></div>' +
      '</div>' +
      '<article class="article-body">' + content + '</article>' +
      '</section>';
    document.getElementById('page-content').innerHTML = html;
  }
};
