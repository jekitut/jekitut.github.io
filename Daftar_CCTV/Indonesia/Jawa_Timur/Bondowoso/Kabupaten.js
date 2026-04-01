var Kabupaten_Bondowoso = [
  { kode: "3", nama: "Pendopo", lat: -7.912525, lng: 113.824075, url_path: "3" },
  { kode: "4", nama: "Bank Jatim", lat: -7.911750, lng: 113.821900, url_path: "4" },
  { kode: "5", nama: "SD Negeri Kota Kulon 01", lat: -7.913575, lng: 113.821200, url_path: "5" },
  { kode: "6", nama: "Bataan", lat: -7.913700, lng: 113.843050, url_path: "6" },
  { kode: "7", nama: "SPBU Tamansari", lat: -7.921250, lng: 113.827400, url_path: "7" },
  { kode: "8", nama: "Koncer Jl. Santawi", lat: -7.931150, lng: 113.824600, url_path: "8" },
  { kode: "9", nama: "Monumen Adipura Bondowoso", lat: -7.930150, lng: 113.814850, url_path: "9" },
  { kode: "14", nama: "UPT PSDA PTZ", lat: -7.921850, lng: 113.817900, url_path: "14" },
  { kode: "15", nama: "UPT PSDA Arah Selatan", lat: -7.921750, lng: 113.817800, url_path: "15" },
  { kode: "19", nama: "Hotel Palm", lat: -7.916700, lng: 113.819700, url_path: "19" },
  { kode: "20", nama: "Yima Arah Barat dan Selatan", lat: -7.914000, lng: 113.838375, url_path: "20" },
  { kode: "21", nama: "Yima Arah Selatan dan Timur", lat: -7.914000, lng: 113.838425, url_path: "21" },
  { kode: "22", nama: "Pasar Induk Bondowoso", lat: -7.912900, lng: 113.827625, url_path: "22" }
];

Kabupaten_Bondowoso.forEach(item => {
  item.url = `https://cctv.bondowosokab.go.id/cgi-bin/nph-zms?scale=100&mode=jpeg&maxfps=30&monitor=${item.url_path}&user=view&pass=K0minfo`;
});