window.Breadcrumb = {
  render: function(items) {
    if (!Array.isArray(items) || items.length === 0) return '';
    return '<nav class="breadcrumb" aria-label="Breadcrumb">' +
      items.map(function(item, index) {
        if (index === items.length - 1) {
          return '<span class="breadcrumb-item active">' + AppUtils.safe(item.label) + '</span>';
        }
        return '<a class="breadcrumb-item" href="' + AppUtils.resolveLink(item.href) + '">' + AppUtils.safe(item.label) + '</a>';
      }).join('<span class="breadcrumb-separator">›</span>') +
      '</nav>';
  }
};
