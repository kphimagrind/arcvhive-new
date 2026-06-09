window.Templates = window.Templates || {};
window.Templates.pagination = function(current, total, baseLink) {
  if (total <= 1) return '';
  var html = '<nav class="pagination" aria-label="Pagination">';
  for (var i = 1; i <= total; i++) {
    var active = i === current ? ' active' : '';
    html += '<a class="pagination-item' + active + '" href="' + AppUtils.resolveLink(baseLink + '&page=' + i) + '">' + i + '</a>';
  }
  html += '</nav>';
  return html;
};
