var Kota_Madiun = [
  { kode: "64 - Simpang 4 501 - Jln. Sido Makmur", nama: "Jl. Sido Makmur Arah Utara", lat: -7.626900, lng: 111.503490, url_path: "501A1" },
  { kode: "65 - Simpang 4 501 - Jln. Tirta Raya", nama: "Jl. Tirta Raya Arah Selatan", lat: -7.626950, lng: 111.503500, url_path: "501A2" },
  { kode: "66 - Simpang 4 501- Jln. Urip Sumoharjo ( 501 )", nama: "Jl. Urip Sumoharjo Arah Barat", lat: -7.626950, lng: 111.503400, url_path: "501A3" },
  { kode: "67 - Simpang 4 501 - Jln. Urip Sumoharjo Dari Arah Timur", nama: "Jl. Urip Sumoharjo Arah Timur", lat: -7.626900, lng: 111.503250, url_path: "501A4" },
  { kode: "77 - Simpang 4 Agus Salim - Jln. Agus Salim Arah Alun - Alun", nama: "Jl. H. Agus Salim Arah Utara", lat: -7.634575, lng: 111.517200, url_path: "agussalim1" },
  { kode: "78 - Simpang 4 Agus Salim - Jln. Citandui", nama: "Jl. H. Agus Salim Arah Timur", lat: -7.634525, lng: 111.517125, url_path: "agussalim2" },
  { kode: "79 - Simpang 4 Agus Salim - Jln. Agus Salim", nama: "Jl. H. Agus Salim Arah Selatan", lat: -7.634625, lng: 111.517200, url_path: "agussalim3" },
  { kode: "80 - Simpang 4 Agus Salim - Jln. Merpati", nama: "Jl. H. Agus Salim Arah Barat", lat: -7.634525, lng: 111.517050, url_path: "agussalim4" },
  { kode: "81 - Simpang 3 Bali - Jln. Kenari", nama: "Jl. Bali Arah Selatan", lat: -7.631275, lng: 111.524775, url_path: "bali1" },
  { kode: "82 - Simpang 3 Bali - Jln. Panglima Sudirman - Jln. Mastrip", nama: "Jl. Bali Arah Timur", lat: -7.631450, lng: 111.524950, url_path: "bali2" },
  { kode: "83 - Simpang 3 Bali - Jln. Bali", nama: "Jl. Bali Arah Utara", lat: -7.631225, lng: 111.524825, url_path: "bali3" }
];

Kota_Madiun.forEach(item => {
  item.url = `https://kanghen10.github.io/wss_player3/#wss://cctv.villabs.id/streamer-jsmpeg/streamer/${item.url_path}`;
});