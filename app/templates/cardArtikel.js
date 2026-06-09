window.Templates = window.Templates || {};

window.Templates.cardArtikel = function(item) {
  return (
    '<article class="card card-article animate-fade">' +
      '<a class="card-link" href="' + AppUtils.resolveLink('pages/artikel.html?id=' + encodeURIComponent(item.id)) + '">' +
        '<div class="card-media">' +
          '<img src="' + AppUtils.getAssetPath(item.thumbnail) + '" alt="' + AppUtils.safe(item.title) + '" loading="lazy">' +
        '</div>' +
        '<div class="card-body">' +
          '<span class="card-tag">' + AppUtils.safe(item.category) + '</span>' +
          '<h3>' + AppUtils.safe(item.title) + '</h3>' +
          '<p>' + AppUtils.truncate(item.excerpt, 90) + '</p>' +
          '<div class="card-meta">' + AppUtils.safe(item.author) + ' &middot; ' + AppUtils.formatDate(item.date) + '</div>' +
        '</div>' +
      '</a>' +
    '</article>'
  );
};
