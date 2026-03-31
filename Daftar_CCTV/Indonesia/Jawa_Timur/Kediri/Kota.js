var Kota_Kediri = [
  { kode: "1", nama: "Muning", lat: -7.827675, lng: 111.996575, url_path: "muning" },
  { kode: "2", nama: "Bandar Ngalim", lat: -7.827125, lng: 112.0057075, url_path: "bandar_ngalim" },
  { kode: "3", nama: "Alun-alun", lat: -7.827700, lng: 112.010500, url_path: "alun_alun" },
  { kode: "4", nama: "Tamanan", lat: -7.828250, lng: 111.984975, url_path: "tamanan" },
  { kode: "7", nama: "Semampir", lat: -7.793775, lng: 112.009800, url_path: "semampir" },
  { kode: "8", nama: "Mrican", lat: -7.780675, lng: 112.000550, url_path: "mrican" },
  { kode: "9", nama: "Iskandar Muda", lat: -7.795150, lng: 112.001850, url_path: "iskandar_muda" },
  { kode: "10", nama: "Jetis", lat: -7.837475, lng: 112.009100, url_path: "jetis" },
  { kode: "11", nama: "Baruna", lat: -7.828975, lng: 112.017275, url_path: "baruna" },
  { kode: "12", nama: "Tosaren", lat: -7.830800, lng: 112.031175, url_path: "tosaren" },
  { kode: "13", nama: "Water Torrent", lat: -7.818300, lng: 112.029300, url_path: "water_torn" },
  { kode: "15", nama: "A Yani Arah Utara", lat: -7.813575, lng: 112.031000, url_path: "a_yani_utara" },
  { kode: "16", nama: "Dandangan", lat: -7.812550, lng: 112.020550, url_path: "dandangan" },
  { kode: "17", nama: "Nabatiyasa", lat: -7.811650, lng: 112.015050, url_path: "nabatiasa" }
];

Kota_Kediri.forEach(item => {
  item.url = `https://pplterpadu.kedirikota.go.id:8888/${item.url_path}/stream.m3u8`;
});