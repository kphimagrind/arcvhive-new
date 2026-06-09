window.Templates = window.Templates || {};

window.Templates.cardDokumen = function(item) {
  return (
    '<article class="card card-dokumen animate-fade">' +
      '<a class="card-link" href="' + AppUtils.resolveLink('pages/viewer.html?id=' + encodeURIComponent(item.id)) + '">' +
        '<div class="card-body">' +
          '<span class="card-tag doc">PDF &rsaquo; ' + AppUtils.safe(item.category) + '</span>' +
          '<h3>' + AppUtils.safe(item.title) + '</h3>' +
          '<div class="card-meta">' + AppUtils.formatDate(item.date) + '</div>' +
        '</div>' +
      '</a>' +
    '</article>'
  );
};
