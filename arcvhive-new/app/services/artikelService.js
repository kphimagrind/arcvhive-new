window.ArtikelService = {
  getAll: async function() {
    if (AppState.cache.artikel) return AppState.cache.artikel;
    AppState.cache.artikel = await DataLoader.loadJson(AppConfig.dataFile.artikel);
    return AppState.cache.artikel;
  },
  getById: async function(id) {
    var items = await this.getAll();
    return items.find(function(item) { return item.id === id; });
  },
  filterByCategory: async function(slug) {
    var items = await this.getAll();
    return items.filter(function(item) { return item.categorySlug === slug; });
  }
};
