window.Searchbox = {
  render: function(query) {
    var value = AppUtils.safe(query || '');
    return (
      '<form class="search-panel" action="' + AppUtils.resolveLink('pages/search.html') + '" method="get">' +
        '<input class="search-input" type="search" name="q" value="' + value + '" placeholder="Cari artikel, dokumen, atau SIPETRA..." aria-label="Pencarian">' +
        '<button class="search-button" type="submit">Cari</button>' +
      '</form>'
    );
  }
};
