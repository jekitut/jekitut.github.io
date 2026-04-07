var Kota_Pasuruan = [
  { wilayah: "Kota Pasuruan", kode: "15 - Taman Kota (01) Ged. Perpustakaan", url_path: "tm-kota-1", nama: "Taman Kota 01", lat: -7.644825, lng: 112.909850 },
  { wilayah: "Kota Pasuruan", kode: "43 - Taman Kota (02) Area Dalam (Tengah)", url_path: "tm-kota-2", nama: "Taman Kota 02", lat: -7.644725, lng: 112.909500 },
  { wilayah: "Kota Pasuruan", kode: "44 - Taman Kota (03) Pintu Masuk Taman", url_path: "tm-kota-3", nama: "Taman Kota 03", lat: -7.645050, lng: 112.909325 },
  { wilayah: "Kota Pasuruan", kode: "45 - Taman Kota (04) Area Dalam (Tengah)", url_path: "tm-kota-4", nama: "Taman Kota 04", lat: -7.645350, lng: 112.909450 },
  { wilayah: "Kota Pasuruan", kode: "167 - Batas Selatan Kota 2 Arah Selatan", url_path: "bts-tembokrejo", nama: "Tembokrejo Arah Selatan", lat: -7.679200, lng: 112.899200 },
  { wilayah: "Kota Pasuruan", kode: "169 - Simpang Kebonagung Arah Selatan", url_path: "sm-kebonagung-2", nama: "Kebonagung Arah Selatan", lat: -7.662500, lng: 112.893150 },
  { wilayah: "Kota Pasuruan", kode: "170 - Simpang Kebonagung Arah Barat", url_path: "sm-kebonagung-3", nama: "Kebonagung Arah Barat", lat: -7.662325, lng: 112.893075 },
  { wilayah: "Kota Pasuruan", kode: "173 - Simpang Bugul Kidul DOOM", url_path: "sm-bugul-1", nama: "Bugul Kidul PTZ", lat: -7.647610, lng: 112.917675 },
  { wilayah: "Kota Pasuruan", kode: "174 - Simpang Bugul Kidul Arah Selatan", url_path: "sm-bugul-2", nama: "Bugul Kidul Arah Selatan", lat: -7.647625, lng: 112.917500 },
  { wilayah: "Kota Pasuruan", kode: "175 - Simpang Bugul Kidul Arah Barat", url_path: "sm-bugul-3", nama: "Bugul Kidul Arah Barat", lat: -7.647400, lng: 112.917650 },
  { wilayah: "Kota Pasuruan", kode: "176 - Simpang Bugul Kidul Arah Timur", url_path: "sm-bugul-4", nama: "Bugul Kidul Arah Timur", lat: -7.647650, lng: 112.917725 },
  { wilayah: "Kota Pasuruan", kode: "177 - Simpang Bugul Kidul Arah Utara", url_path: "sm-bugul-5", nama: "Bugul Kidul Arah Utara", lat: -7.647450, lng: 112.917700 }
];

Kota_Pasuruan.forEach(item => {
  item.url = `https://cam.pasuruankota.go.id/${item.url_path}`;
});