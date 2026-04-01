var Kota_Pasuruan = [
  { kode: "15 - Taman Kota (01) Ged. Perpustakaan", nama: "Taman Kota 01", lat: -7.644825, lng: 112.909850, url_path: "tm-kota-1" },
  { kode: "43 - Taman Kota (02) Area Dalam (Tengah)", nama: "Taman Kota 02", lat: -7.644725, lng: 112.909500, url_path: "tm-kota-2" },
  { kode: "44 - Taman Kota (03) Pintu Masuk Taman", nama: "Taman Kota 03", lat: -7.645050, lng: 112.909325, url_path: "tm-kota-3" },
  { kode: "45 - Taman Kota (04) Area Dalam (Tengah)", nama: "Taman Kota 04", lat: -7.645350, lng: 112.909450, url_path: "tm-kota-4" },
  { kode: "167 - Batas Selatan Kota 2 Arah Selatan", nama: "Tembokrejo Arah Selatan", lat: -7.679200, lng: 112.899200, url_path: "bts-tembokrejo" },
  { kode: "169 - Simpang Kebonagung Arah Selatan", nama: "Kebonagung Arah Selatan", lat: -7.662500, lng: 112.893150, url_path: "sm-kebonagung-2" },
  { kode: "170 - Simpang Kebonagung Arah Barat", nama: "Kebonagung Arah Barat", lat: -7.662325, lng: 112.893075, url_path: "sm-kebonagung-3" }
];

Kota_Pasuruan.forEach(item => {
  item.url = `https://cam.pasuruankota.go.id/${item.url_path}`;
});