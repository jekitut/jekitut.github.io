var Kota_Pasuruan = [
  { kode: "Batas Selatan Kota 2", nama: "Tembokrejo", lat: -7.679150, lng: 112.899200, url_path: "bts-tembokrejo" }
];

Kota_Pasuruan.forEach(item => {
  item.url = `https://cam.pasuruankota.go.id/${item.url_path}`;
});