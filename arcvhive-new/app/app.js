(async function() {
  try {
    var config = await DataLoader.loadJson(AppConfig.dataFile.config);
    AppState.cache.config = config;
    var root = document.getElementById('app');
    root.innerHTML = Navbar.render(config) + '<main id="page-content" class="page-content"></main>' + Footer.render(config);
    Menu.init();
    var page = Router.current();
    if (page === 'home') {
      await Dashboard.init(config);
    } else if (page === 'kategori') {
      await Kategori.init(config);
    } else if (page === 'artikel') {
      await ArtikelPage.init(config);
    } else if (page === 'viewer') {
      await ViewerPage.init(config);
    } else if (page === 'sipetra') {
      await SipetraPage.init(config);
    } else if (page === 'search') {
      await SearchPage.init(config);
    } else if (page === 'tentang') {
      await About.init(config);
    } else {
      document.getElementById('page-content').innerHTML = '<section class="content-panel"><h2>Halaman tidak ditemukan</h2></section>';
    }
  } catch (error) {
    console.error(error);
    document.getElementById('app').innerHTML = '<section class="content-panel"><h2>Terjadi kesalahan saat memuat halaman.</h2><p>' + (error.message || 'Unknown error') + '</p></section>';
  }
})();
