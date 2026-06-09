window.DokumenService = {
  getAll: async function() {
    if (AppState.cache.dokumen) return AppState.cache.dokumen;
    AppState.cache.dokumen = await DataLoader.loadJson(AppConfig.dataFile.dokumen);
    return AppState.cache.dokumen;
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
