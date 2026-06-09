window.DataLoader = {
  loadJson: async function(filePath) {
    var url = AppUtils.getAssetPath(filePath);
    var response = await fetch(url);
    if (!response.ok) {
      throw new Error('Data tidak dapat dimuat: ' + url);
    }
    return response.json();
  },
  loadHtml: async function(filePath) {
    var url = AppUtils.getAssetPath(filePath);
    var response = await fetch(url);
    if (!response.ok) {
      throw new Error('Konten tidak dapat dimuat: ' + url);
    }
    return response.text();
  }
};
