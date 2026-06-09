window.Templates = window.Templates || {};

window.Templates.cardSipetra = function(item) {
  return (
    '<article class="card card-sipetra animate-fade">' +
      '<a class="card-link" href="' + AppUtils.resolveLink('pages/sipetra.html?id=' + encodeURIComponent(item.id)) + '">' +
        '<div class="card-body">' +
          '<span class="card-tag sheet">SIPETRA &rsaquo; ' + AppUtils.safe(item.category) + '</span>' +
          '<h3>' + AppUtils.safe(item.title) + '</h3>' +
          '<p>' + AppUtils.truncate(item.description, 80) + '</p>' +
        '</div>' +
      '</a>' +
    '</article>'
  );
};
