window.ViewerPage = {
  init: async function(config) {
    var id = AppUtils.qs('id');
    var documentData = await DokumenService.getById(id);
    if (!documentData) {
      document.getElementById('page-content').innerHTML = '<section class="content-panel"><h2>Dokumen tidak ditemukan</h2><p>Dokumen tidak tersedia atau telah dipindahkan.</p></section>';
      return;
    }
    var filePath = AppUtils.getAssetPath(documentData.file);
    var html = '<section class="content-panel animate-fade">' +
      Breadcrumb.render([{ label: 'Beranda', href: 'index.html' }, { label: 'Dokumen', href: 'pages/viewer.html' }, { label: documentData.title, href: 'pages/viewer.html?id=' + id }]) +
      '<div class="viewer-toolbar">' +
        '<span class="doc-title">' + AppUtils.safe(documentData.title) + '</span>' +
        '<a class="button button-secondary" href="' + filePath + '" target="_blank">Unduh PDF</a>' +
      '</div>' +
      '<div class="viewer-frame">' +
        '<iframe src="' + filePath + '" frameborder="0" aria-label="PDF viewer" allowfullscreen></iframe>' +
      '</div>' +
      '</section>';
    document.getElementById('page-content').innerHTML = html;
  }
};
