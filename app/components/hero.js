window.Hero = {
  render: function(config) {
    var hero    = config.hero || {};
    var title   = AppUtils.safe(hero.title || config.siteTitle);
    var sub     = AppUtils.safe(hero.subtitle || config.siteDescription);
    var bgImage = hero.backgroundImage ? 'style="background-image: url(\'' + AppUtils.getAssetPath(hero.backgroundImage) + '\');"' : '';
    var actions = (hero.cta || []).map(function(link, i) {
      var cls = i === 0 ? 'button button-primary' : 'button button-secondary';
      return '<a class="' + cls + '" href="' + AppUtils.resolveLink(link.href) + '">' + AppUtils.safe(link.label) + '</a>';
    }).join('');

    return (
      '<section class="hero animate-fade" ' + bgImage + '>' +
        '<div class="hero-overlay"></div>' +
        '<div class="hero-copy">' +
          '<span class="eyebrow">Arsip Kebijakan Publik</span>' +
          '<h1>' + title + '</h1>' +
          '<p>' + sub + '</p>' +
          '<div class="hero-actions">' + actions + '</div>' +
        '</div>' +
      '</section>'
    );
  }
};
