var Kabupaten_Bondowoso = [
  { kode: "3", nama: "Pendopo", lat: -7.912525, lng: 113.824075, url_path: "3" },
  { kode: "4", nama: "Bank Jatim", lat: -7.911750, lng: 113.821900, url_path: "4" }
];

Kabupaten_Bondowoso.forEach(item => {
  item.url = `https://cctv.bondowosokab.go.id/cgi-bin/nph-zms?scale=100&mode=jpeg&maxfps=30&monitor=${item.url_path}&user=view&pass=K0minfo`;
});