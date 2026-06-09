window.AppUtils = {
  getPageScope: function() {
    return location.pathname.includes('/pages/') ? 'pages' : 'root';
  },
  getAssetPath: function(path) {
    var file = String(path || '');
    if (/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(file) || file.startsWith('//')) {
      return file;
    }
    file = file.replace(/^\.\//, '').replace(/^\//, '');
    return this.getPageScope() === 'pages' ? '../' + file : file;
  },
  resolveLink: function(href) {
    if (!href || href.startsWith('/') || href.startsWith('./') || href.startsWith('../')) {
      return href;
    }
    if (this.getPageScope() === 'pages') {
      if (href === 'index.html') {
        return '../index.html';
      }
      if (href.startsWith('pages/')) {
        return href.slice(6);
      }
    }
    return href;
  },
  qs: function(key, defaultValue) {
    var params = new URLSearchParams(location.search);
    return params.get(key) || defaultValue || '';
  },
  formatDate: function(value) {
    try {
      var date = new Date(value);
      return isNaN(date.getTime()) ? value : date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch (err) {
      return value;
    }
  },
  truncate: function(text, length) {
    if (!text) return '';
    return text.length > length ? text.slice(0, length).trim() + '...' : text;
  },
  safe: function(text) {
    return text ? String(text).replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
  }
};
