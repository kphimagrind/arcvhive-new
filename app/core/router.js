window.Router = {
  current: function() {
    return document.body.dataset.page || 'home';
  },
  navigate: function(target) {
    window.location.href = AppUtils.resolveLink(target);
  }
};
