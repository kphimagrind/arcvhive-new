# Panduan Upload Konten

Dokumen ini menjelaskan cara menambahkan konten baru ke sistem Kebijakan Publik Archive tanpa mengubah kode.

## 1. Tambah Artikel

1. Buat file HTML baru di folder `content/artikel/<kategori>/`.
   - Contoh: `content/artikel/informasi/pelatihan-kader.html`
2. Isi file HTML dengan konten artikel.
3. Tambahkan metadata ke `assets/data/artikel.json`.
   - Contoh:
     ```json
     {
       "id": "ART003",
       "title": "Judul Artikel Baru",
       "excerpt": "Ringkasan singkat artikel.",
       "category": "Informasi",
       "categorySlug": "informasi",
       "date": "2026-06-08",
       "author": "Nama Penulis",
       "thumbnail": "./assets/img/sample-article-03.svg",
       "file": "./content/artikel/informasi/judul-artikel-baru.html"
     }
     ```
4. Upload file artikel dan update `artikel.json`.
5. Halaman utama dan kategori akan menampilkan artikel baru otomatis.

## 2. Tambah Dokumen PDF

1. Upload file PDF ke folder `content/dokumen/<kategori>/`.
   - Contoh: `content/dokumen/peraturan/peraturan-02.pdf`
2. Tambahkan metadata ke `assets/data/dokumen.json`.
   - Contoh:
     ```json
     {
       "id": "DOC003",
       "title": "Peraturan Organisasi 2026",
       "category": "Peraturan",
       "categorySlug": "peraturan",
       "date": "2026-06-08",
       "file": "./content/dokumen/peraturan/peraturan-02.pdf"
     }
     ```
3. Halaman viewer akan memuat dokumen baru secara otomatis.

## 3. Tambah SIPETRA (Spreadsheet)

1. Upload file spreadsheet ke folder `content/spreadsheet/<kategori>/`.
   - Contoh: `content/spreadsheet/pengaduan/data-pengaduan.html`
2. Tambahkan metadata ke `assets/data/sipetra.json`.
   - Contoh:
     ```json
     {
       "id": "SIP003",
       "title": "Data Monitoring",
       "category": "SIPETRA",
       "categorySlug": "sipetra",
       "file": "./content/spreadsheet/monitoring/data-monitoring.html",
       "description": "Deskripsi singkat spreadsheet."
     }
     ```
3. Halaman SIPETRA akan menampilkan data baru secara otomatis.

## 4. Catatan Penting

- Jangan mengubah file kode JavaScript untuk menambahkan konten baru.
- Pastikan semua path file di metadata JSON dimulai dengan `./` dan sesuai struktur folder.
- Gunakan `index.html` dan `pages/` untuk navigasi, tidak perlu membuat halaman HTML baru kecuali konten artikel atau spreadsheet.
- Setelah memperbarui JSON dan konten, commit perubahan ke GitHub untuk mempublikasikan situs.
