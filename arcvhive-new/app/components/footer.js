window.Footer = {
  render: function(config) {
    var menu = config.menu || [];
    var social = config.social || [];

    var menuLinks = menu.map(function(item) {
      return '<li><a href="' + AppUtils.resolveLink(item.href) + '">' + AppUtils.safe(item.label) + '</a></li>';
    }).join('');

    return (
      '<footer class="site-footer">' +
        '<div class="footer-inner">' +
          '<div class="footer-brand">' +
            '<strong>' + AppUtils.safe(config.siteTitle) + '</strong>' +
            '<p>' + AppUtils.safe(config.siteDescription) + '<br>Dioperasikan tanpa backend — data diambil dari JSON.</p>' +
          '</div>' +
          '<div class="footer-links">' +
            '<h4>Navigasi</h4>' +
            '<ul>' + menuLinks + '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '&copy; ' + new Date().getFullYear() + ' ' + AppUtils.safe(config.siteTitle) + ' &mdash; Arsip Kebijakan Publik' +
        '</div>' +
      '</footer>'
    );
  }
};
