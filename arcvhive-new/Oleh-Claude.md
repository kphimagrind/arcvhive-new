# Panduan Kustomisasi Website — Oleh Claude

Dokumen ini ditujukan untuk pengelola website yang **tidak berlatar belakang pemrograman**. Semua langkah di sini cukup dilakukan lewat teks editor biasa (seperti Notepad, VS Code, atau Notepad++) tanpa perlu memahami kode.

---

## Daftar Isi

1. [Menambahkan Gambar Thumbnail Artikel](#1-menambahkan-gambar-thumbnail-artikel)
2. [Mengganti Foto Background Hero (Banner Atas)](#2-mengganti-foto-background-hero-banner-atas)
3. [Mengubah Warna Website](#3-mengubah-warna-website)
4. [Mengubah Warna Kotak Navigasi Bawah Header](#4-mengubah-warna-kotak-navigasi-bawah-header)
5. [Mengubah Judul dan Deskripsi Website](#5-mengubah-judul-dan-deskripsi-website)
6. [Menambahkan Artikel Baru dengan Thumbnail](#6-menambahkan-artikel-baru-dengan-thumbnail)
7. [Struktur Folder yang Perlu Diketahui](#7-struktur-folder-yang-perlu-diketahui)
8. [Catatan Penting](#8-catatan-penting)

---

## 1. Menambahkan Gambar Thumbnail Artikel

Thumbnail adalah gambar kecil yang muncul di kartu artikel di halaman utama.

**Langkah-langkah:**

1. Siapkan file gambar Anda (format: `.jpg`, `.jpeg`, `.png`, atau `.webp`)
2. Beri nama file tanpa spasi, gunakan tanda hubung. Contoh: `pelatihan-kader-2026.jpg`
3. Simpan file gambar ke folder:
   ```
   assets/img/
   ```
4. Buka file `assets/data/artikel.json` dengan teks editor
5. Cari bagian `"thumbnail"` pada artikel yang ingin diberi gambar
6. Ganti nilainya dengan path gambar Anda:
   ```json
   "thumbnail": "./assets/img/pelatihan-kader-2026.jpg"
   ```

**Contoh sebelum:**
```json
"thumbnail": "./assets/img/sample-article-01.jpeg"
```

**Contoh sesudah:**
```json
"thumbnail": "./assets/img/pelatihan-kader-2026.jpg"
```

> **Tips ukuran gambar:** Gunakan gambar horizontal (landscape) dengan rasio 16:9 atau 3:2. Ukuran ideal: lebar 800px, tinggi 500px. Ukuran file sebaiknya di bawah 500KB agar website tetap cepat.

---

## 2. Mengganti Foto Background Hero (Banner Atas)

Hero adalah bagian banner besar di atas halaman utama. Secara default warnanya merah gelap. Anda bisa mengganti dengan foto.

**Langkah-langkah:**

1. Siapkan foto dengan ukuran minimal 1200×600 px (landscape/horizontal)
2. Simpan foto ke folder: `assets/img/`
   - Contoh nama file: `background-hero.jpg`
3. Buka file `assets/data/config.json`
4. Cari bagian `"hero"`, lalu temukan `"backgroundImage"`
5. Isi dengan path foto Anda:
   ```json
   "backgroundImage": "./assets/img/background-hero.jpg"
   ```

**Contoh:**
```json
"hero": {
  "title": "Arsip Kebijakan Publik Organisasi",
  "subtitle": "Kumpulan artikel, dokumen, dan data SIPETRA...",
  "backgroundImage": "./assets/img/background-hero.jpg",
  ...
}
```

> **Catatan:** Foto akan otomatis diberi lapisan gelap (overlay) agar teks tetap terbaca. Anda tidak perlu mengedit CSS untuk ini.

Untuk **menghapus background foto** dan kembali ke warna merah gelap default, kosongkan nilainya:
```json
"backgroundImage": ""
```

---

## 3. Mengubah Warna Website

Semua warna utama website diatur di satu tempat: file `assets/css/style.css`, di bagian paling atas yang disebut `:root`.

**Buka file** `assets/css/style.css`, lalu cari baris ini di bagian paling atas:

```css
:root {
  --red:        #c1121f;
  --red-dark:   #96000d;
  --gold:       #f5a623;
  --dark:       #1a1a1a;
  --nav-bg:     #1a1a1a;
  --gray:       #555;
  --light:      #f0f0f0;
  --white:      #ffffff;
  --border:     #e0e0e0;
}
```

**Arti masing-masing warna:**

| Variabel | Digunakan untuk |
|---|---|
| `--red` | Warna merah header, tombol, garis section |
| `--red-dark` | Warna merah gelap saat hover |
| `--gold` | Warna kuning emas (aksen, garis kartu) |
| `--dark` | Warna teks utama dan footer |
| `--nav-bg` | **Warna kotak navigasi bawah header** |
| `--light` | Warna latar belakang halaman |

**Cara mengubah warna:** Ganti kode warna (diawali `#`) dengan warna pilihan Anda. Gunakan situs [coolors.co](https://coolors.co) atau [htmlcolorcodes.com](https://htmlcolorcodes.com) untuk mencari kode warna.

**Contoh — ganti tema merah ke biru tua:**
```css
--red:        #1a3a6b;
--red-dark:   #0f2447;
--gold:       #f5a623;
```

---

## 4. Mengubah Warna Kotak Navigasi Bawah Header

Kotak navigasi bawah (yang berisi menu BERANDA, INFORMASI, dll.) memiliki warna tersendiri yang bisa diubah terpisah dari header merah di atasnya.

**Di file `assets/css/style.css`, cari:**
```css
--nav-bg: #1a1a1a;
```

Ganti `#1a1a1a` dengan warna pilihan Anda. Contoh pilihan warna yang cocok:

| Efek | Kode warna |
|---|---|
| Hitam gelap (default) | `#1a1a1a` |
| Abu gelap | `#2d2d2d` |
| Merah tua (senada header) | `#96000d` |
| Navy biru | `#1e2a4a` |
| Hijau tua | `#1a3a2a` |

---

## 5. Mengubah Judul dan Deskripsi Website

Buka file `assets/data/config.json`. Ubah bagian paling atas:

```json
{
  "siteTitle": "Kebijakan Publik Archive",
  "siteDescription": "Portal arsip kebijakan publik HIMAGRIND",
  ...
}
```

- `"siteTitle"` → Nama website (muncul di header dan footer)
- `"siteDescription"` → Teks kecil di bawah judul di header

**Untuk mengubah teks di hero banner**, edit bagian:
```json
"hero": {
  "title": "Arsip Kebijakan Publik Organisasi",
  "subtitle": "Kumpulan artikel, dokumen, dan data SIPETRA untuk pengelolaan informasi organisasi.",
  ...
}
```

---

## 6. Menambahkan Artikel Baru dengan Thumbnail

Ini adalah alur lengkap untuk menambah artikel dari awal:

**Langkah 1 — Siapkan gambar thumbnail**
- Simpan gambar ke `assets/img/`
- Contoh: `assets/img/artikel-rapat-2026.jpg`

**Langkah 2 — Buat file konten artikel**
- Buat file HTML baru di `content/artikel/<kategori>/`
- Contoh: `content/artikel/informasi/rapat-koordinasi-2026.html`
- Isi file tersebut dengan konten artikel (bisa HTML sederhana)

**Langkah 3 — Daftarkan di artikel.json**
- Buka `assets/data/artikel.json`
- Tambahkan entri baru di dalam tanda kurung siku `[...]`, pisahkan dengan koma dari entri sebelumnya:

```json
{
  "id": "ART002",
  "title": "Rapat Koordinasi Divisi 2026",
  "excerpt": "Ringkasan hasil rapat koordinasi antar divisi pada bulan Juni.",
  "category": "Informasi",
  "categorySlug": "informasi",
  "date": "2026-06-15",
  "author": "Kebijakan Publik",
  "thumbnail": "./assets/img/artikel-rapat-2026.jpg",
  "file": "./content/artikel/informasi/rapat-koordinasi-2026.html"
}
```

**Perhatikan:**
- `"id"` harus unik, tidak boleh sama dengan artikel lain
- `"date"` format: `TAHUN-BULAN-TANGGAL` (contoh: `2026-06-15`)
- `"categorySlug"` harus sama persis dengan yang ada di `config.json` (huruf kecil, tanpa spasi)

---

## 7. Struktur Folder yang Perlu Diketahui

```
arcvhive/
│
├── assets/
│   ├── img/               ← SIMPAN SEMUA GAMBAR DI SINI
│   ├── css/
│   │   └── style.css      ← UBAH WARNA DAN TAMPILAN DI SINI
│   └── data/
│       ├── config.json    ← JUDUL, MENU, HERO, BACKGROUND
│       ├── artikel.json   ← DAFTAR ARTIKEL
│       ├── dokumen.json   ← DAFTAR DOKUMEN PDF
│       └── sipetra.json   ← DAFTAR DATA SIPETRA
│
├── content/
│   ├── artikel/           ← FILE HTML ISI ARTIKEL
│   ├── dokumen/           ← FILE PDF DOKUMEN
│   └── spreadsheet/       ← FILE SPREADSHEET/HTML SIPETRA
│
└── UPLOAD-KONTEN.md       ← Panduan upload konten asli
    Oleh-Claude.md         ← Panduan ini
```

---

## 8. Catatan Penting

- **Jangan hapus tanda kutip** (`"`) di file JSON. Jika ada error setelah diedit, kemungkinan ada tanda kutip yang hilang atau kelebihan koma.
- **Validasi JSON:** Jika ragu apakah file JSON Anda sudah benar, tempel isinya ke situs [jsonlint.com](https://jsonlint.com) untuk dicek.
- **Nama file gambar:** Hindari spasi dan karakter khusus. Gunakan huruf kecil dan tanda hubung. Contoh: `gambar-artikel-01.jpg` ✅ bukan `Gambar Artikel 01.jpg` ❌
- **Setelah semua perubahan:** Commit dan push ke GitHub untuk mempublikasikan perubahan ke website.
- **Undo kesalahan:** Jika salah mengedit, GitHub menyimpan riwayat semua perubahan — hubungi pengelola teknis untuk rollback jika perlu.

---

*Panduan ini dibuat oleh Claude (Anthropic) untuk memudahkan pengelolaan website Arcvhive tanpa keahlian pemrograman.*
