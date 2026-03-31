var Kota_Pasuruan = [
  { kode: "167 - Batas Selatan Kota 2 Arah Selatan", nama: "Tembokrejo Arah Selatan", lat: -7.679200, lng: 112.899200, url_path: "bts-tembokrejo" },
  { kode: "169 - Simpang Kebonagung Arah Selatan", nama: "Kebonagung Arah Selatan", lat: -7.662500, lng: 112.893150, url_path: "sm-kebonagung-2" }
];

Kota_Pasuruan.forEach(item => {
  item.url = `https://cam.pasuruankota.go.id/${item.url_path}`;
});