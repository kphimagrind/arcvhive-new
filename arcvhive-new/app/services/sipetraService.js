window.SipetraService = {
  getAll: async function() {
    if (AppState.cache.sipetra) return AppState.cache.sipetra;
    AppState.cache.sipetra = await DataLoader.loadJson(AppConfig.dataFile.sipetra);
    return AppState.cache.sipetra;
  },
  getById: async function(id) {
    var items = await this.getAll();
    return items.find(function(item) { return item.id === id; });
  }
};
