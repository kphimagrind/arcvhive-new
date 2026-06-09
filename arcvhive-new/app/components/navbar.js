window.Navbar = {
  render: function(config) {
    var menu = config.menu || [];

    var desktopNavItems = menu.map(function(item) {
      return '<li><a href="' + AppUtils.resolveLink(item.href) + '">' + AppUtils.safe(item.label) + '</a></li>';
    }).join('');

    var mobileNavItems = menu.map(function(item) {
      return '<li><a href="' + AppUtils.resolveLink(item.href) + '">' + AppUtils.safe(item.label) + '</a></li>';
    }).join('');

    return (
      /* Mobile menu overlay */
      '<div class="mobile-menu" id="mobile-menu">' +
        '<div class="mobile-menu-header">' +
          '<span class="mobile-menu-title">' + AppUtils.safe(config.siteTitle) + '</span>' +
          '<button class="mobile-menu-close" onclick="document.getElementById(\'mobile-menu\').classList.remove(\'open\')">&times;</button>' +
        '</div>' +
        '<ul class="mobile-nav-list">' + mobileNavItems + '</ul>' +
        '<form class="mobile-search" action="' + AppUtils.resolveLink('pages/search.html') + '" method="get">' +
          '<input type="search" name="q" placeholder="Cari artikel, dokumen...">' +
          '<button type="submit">Cari</button>' +
        '</form>' +
      '</div>' +

      /* Main header */
      '<header class="site-header">' +
        /* Top bar: brand + search */
        '<div class="header-top">' +
          '<div class="brand">' +
            '<a href="' + AppUtils.resolveLink('index.html') + '">' +
              '<strong>' + AppUtils.safe(config.siteTitle) + '</strong>' +
              '<span>' + AppUtils.safe(config.siteDescription) + '</span>' +
            '</a>' +
          '</div>' +
          '<div class="header-right">' +
            '<form class="header-search" action="' + AppUtils.resolveLink('pages/search.html') + '" method="get">' +
              '<input type="search" name="q" placeholder="Cari...">' +
              '<button type="submit">&#9906;</button>' +
            '</form>' +
            '<button class="hamburger" aria-label="Buka menu" onclick="document.getElementById(\'mobile-menu\').classList.add(\'open\')">' +
              '<span></span><span></span><span></span>' +
            '</button>' +
          '</div>' +
        '</div>' +
        /* Nav bar bawah dengan background kotak */
        '<nav class="site-nav">' +
          '<div class="nav-inner">' +
            '<ul class="nav-list">' + desktopNavItems + '</ul>' +
          '</div>' +
        '</nav>' +
      '</header>'
    );
  }
};
