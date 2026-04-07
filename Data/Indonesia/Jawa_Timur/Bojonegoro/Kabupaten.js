var Kabupaten_Bojonegoro = [
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 4 BUNDARAN JETAK", url_path: "af39d772-e7e0-493c-aba1-4460d473bfa8", nama: "Air Mancur Jetak Arah Utara", latitude: -7.163200, longitude: 111.869750 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 4 RAJEKWESI - SOSRODILOGO", url_path: "05dfbeca-138c-4e12-a89a-c7b4f08375e7", nama: "Rajekwesi Arah Barat", latitude: -7.155700, longitude: 111.872350 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 4 U.SUROPATI - PANGLIMA POLIM", url_path: "b707920d-4922-40cd-aa3a-40335f4d1139", nama: "Suropati Arah Selatan", latitude: -7.158525, longitude: 111.879300 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 3 BUNDARAN ADIPURA", url_path: "", nama: "Tugu Adipura Bojonegoro", latitude: -7.159675, longitude: 111.881775 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 4 KREMPYENG - GAJAH MADA", url_path: "fd9a18d4-a5f9-4046-b60c-065512722ee9", nama: "Krempyeng Arah Surabaya", latitude: -7.161950, longitude: 111.884075 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 3 JAMBEAN - BASUKI RAHMAT", url_path: "7535db5e-d96f-4fc9-ae7d-ff1dc41f79ce", nama: "Jambean Arah Utara", latitude: -7.166550, longitude: 111.889825 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 3 AHMAD YANI - VETERAN", url_path: "121464f4-cfbc-4bbf-bd2e-247de018f401", nama: "Ahmad Yani Arah Utara", latitude: -7.1704525, longitude: 111.894700 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 4 ALUN ALUN - SATLANTAS", url_path: "", nama: "Alun-alun", latitude: -7.148300, longitude: 111.879300 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 4 DIPONEGORO", url_path: "", nama: "Diponegoro", latitude: -7.152250, longitude: 111.882550 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 4 PLN - SAWUNGGALING", url_path: "94774749-ebac-4563-b91e-cd24249f15ba", nama: "PLN Arah Selatan", latitude: -7.152575, longitude: 111.891575 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 4 MLATEN", url_path: "285b6a91-2eb3-4d8b-aee8-4f4d459302df", nama: "Mlaten Arah Timur", latitude: -7.153650, longitude: 111.900775 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 3 CAMPUREJO - LETTU SUYITNO", url_path: "9f01c568-f320-489f-8422-23003b18b678", nama: "Campurejo Arah Timur", latitude: -7.142050, longitude: 111.901900 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 4 PROLIMAN KAPAS", url_path: "", nama: "Proliman", latitude: -7.197600, longitude: 111.928850 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 4 BALEN", url_path: "", nama: "Balen", latitude: -7.193125, longitude: 111.959100 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 4 SUMBEREJO", url_path: "", nama: "Sumberrejo", latitude: -7.177150, longitude: 112.000450 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 4 CLANGAP", url_path: "", nama: "Clangap", latitude: -7.137050, longitude: 111.725850 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 4 BASUKI RAHMAT - DR.CIPTO", url_path: "4d630ff3-a34a-45bc-b265-d63b004cd2c0", nama: "Basuki Rahmat Arah Selatan", latitude: -7.157374, longitude: 111.891500 },
  { wilayah: "Kabupaten Bojonegoro", kode: "DEPAN UJI KENDARAAN BERMOTOR", url_path: "0682655b-c640-40a5-a611-fe3a6b905502", nama: "UPTD PKB Arah Surabaya", latitude: -7.179450, longitude: 111.906200 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 4 DR.CIPTO - DR.SUHARSO", url_path: "e48d590c-9788-45d1-b3e2-32243074e6a8", nama: "Dr. Cipto Arah Barat", latitude: -7.157300, longitude: 111.888850 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 4 TEUKU UMAR", url_path: "744634a6-f7ac-41b0-8334-7a8bd49aec65", nama: "Teuku Umar Arah Utara dan Barat", latitude: -7.152675, longitude: 111.889800 },
  { wilayah: "Kabupaten Bojonegoro", kode: "SIMPANG 4 PADANGAN", url_path: "", nama: "Padangan", latitude: -7.156700, longitude: 111.616050 }
];

Kabupaten_Bojonegoro.forEach(item => {
  item.url = `https://data.bojonegorokab.go.id/live/public/${item.url_path}.m3u8`;
});