window.SearchService = {
  search: async function(query) {
    var search = (query || '').toLowerCase().trim();
    if (!search) return { artikel: [], dokumen: [], sipetra: [] };
    var [artikel, dokumen, sipetra] = await Promise.all([ArtikelService.getAll(), DokumenService.getAll(), SipetraService.getAll()]);
    return {
      artikel: artikel.filter(function(item) {
        return (item.title + ' ' + item.excerpt + ' ' + item.author + ' ' + item.category).toLowerCase().includes(search);
      }),
      dokumen: dokumen.filter(function(item) {
        return (item.title + ' ' + item.category).toLowerCase().includes(search);
      }),
      sipetra: sipetra.filter(function(item) {
        return (item.title + ' ' + item.category).toLowerCase().includes(search);
      })
    };
  }
};
