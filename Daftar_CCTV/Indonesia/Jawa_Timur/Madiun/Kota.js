var Kota_Madiun = [
  { kode: "64 - Simpang 4 501 - Jln. Sido Makmur", nama: "Jl. Sido Makmur Arah Utara", lat: -7.626900, lng: 111.503490, url_path: "501A1" },
  { kode: "65 - Simpang 4 501 - Jln. Tirta Raya", nama: "Jl. Tirta Raya Arah Selatan", lat: -7.626950, lng: 111.503500, url_path: "501A2" },
  { kode: "66 - Simpang 4 501- Jln. Urip Sumoharjo ( 501 )", nama: "Jl. Urip Sumoharjo Arah Barat", lat: -7.626950, lng: 111.503400, url_path: "501A3" },
  { kode: "67 - Simpang 4 501 - Jln. Urip Sumoharjo Dari Arah Timur", nama: "Jl. Urip Sumoharjo Arah Timur", lat: -7.626900, lng: 111.503250, url_path: "501A4" }
];

Kota_Madiun.forEach(item => {
  item.url = `https://kanghen10.github.io/wss_player3/#wss://cctv.villabs.id/streamer-jsmpeg/streamer/${item.url_path}`;
});