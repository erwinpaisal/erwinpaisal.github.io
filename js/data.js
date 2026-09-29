/**
 * Satu-satunya sumber konten untuk halaman utama.
 * Update data di file ini, lalu deploy ke GitHub Pages.
 */
window.DEFAULT_DATA = {
  profile: {
    name: "Erwin Paisal",
    title: "Head of Information Technology",
    currentRole: "Head of Information Technology @ Victoeria Vicci",
    location: "Tanjung Morawa, Medan, Sumatera Utara, Indonesia",
    phone: "082284363365",
    whatsapp: "6282284363365",
    email: "erwinpaisalid@gmail.com",
    linkedin: "https://www.linkedin.com/in/erwin-paisal",
    github: "https://github.com/erwinpaisal",
    instagram: "https://www.instagram.com/erwinpaisal.id",
    avatar: "images/erwin-paisal.jpg",
    availability: "Lagi buka buat ngobrol soal kerjaan IT yang beneran kepakai",
    bio: "Kerjaan gue seputar IT operasional: jaringan, server, website, aplikasi internal, mesin 3D jewelry, mesin laser, dan alat kerja tim. Kalau proses kerja masih ribet atau sistem sering bikin repot, kita bedah dulu masalahnya lalu cari cara paling masuk akal buat diberesin."
  },

  services: [
    {
      id: "infrastructure",
      icon: "server",
      name: "Jaringan dan Infrastruktur IT",
      tagline: "Biar jaringan, server, perangkat kerja, dan backup nggak bikin pusing",
      description: "Kita cek dulu kondisi yang ada, tentuin mana yang perlu diberesin, lalu jalanin satu-satu tanpa bikin operasional jadi berantakan.",
      deliverables: ["Cek jaringan, server, dan perangkat kerja", "Bikin urutan kerja yang jelas", "Rapihin dokumentasi", "Kasih rekomendasi lanjutannya"]
    },
    {
      id: "systems",
      icon: "code",
      name: "Website, Aplikasi, dan Otomasi",
      tagline: "Buat kerjaan yang berulang jadi nggak dikerjain manual terus",
      description: "Mulai dari ngerapiin alur kerja sampai bikin sistem internal yang gampang dipakai tim, fokusnya tetap ke hal yang memang kepakai sehari-hari.",
      deliverables: ["Bedah alur kerja", "Pilih fitur yang penting dulu", "Bikin solusi yang gampang dipakai", "Siapin panduan singkat"]
    },
    {
      id: "consultation",
      icon: "tool",
      name: "Bantu Cari Akar Masalah",
      tagline: "Kalau ada yang error, lemot, atau nggak jalan sesuai harapan",
      description: "Nggak asal tebak. Kita cari dulu sumber masalahnya, bandingin opsi yang ada, lalu pilih langkah yang paling realistis buat dijalanin.",
      deliverables: ["Cari sumber masalah", "Cek risiko dan dampaknya", "Bandingin opsi solusi", "Tentukan langkah berikutnya"]
    },
    {
      id: "jewelry-machines",
      icon: "machine",
      name: "Mesin 3D Jewelry dan Laser",
      tagline: "Buat mesin produksi tetap enak dipakai dan nggak gampang ganggu alur kerja",
      description: "Mulai dari printer resin atau wax, sampai laser welding, engraving, dan marking. Fokusnya ke pengecekan masalah, perawatan, dan perbaikan bertahap yang masuk akal.",
      deliverables: ["Cek kondisi mesin dan alur kerja", "Bantu cari sumber masalah", "Catat kebutuhan perawatan", "Susun langkah perbaikan bertahap"]
    }
  ],

  projects: [
    {
      id: "helpdesk-asset",
      type: "Sistem internal",
      title: "Helpdesk dan Asset Management",
      summary: "Satu tempat buat nyatet tiket, riwayat pekerjaan, jadwal, pengadaan, dan aset IT supaya nggak tercecer di chat atau file sendiri-sendiri.",
      details: ["Tiket dan progres pengerjaan", "Data aset, mutasi, dan riwayatnya", "Laporan yang bisa diekspor"],
      image: "images/projects/helpdesk-vss.jpg",
      imageAlt: "Mockup VSS Helpdesk di laptop dan ponsel"
    },
    {
      id: "koperasi",
      type: "Sistem operasional",
      title: "Aplikasi Koperasi",
      summary: "Ngebantu ngatur data anggota, transaksi, buku besar, dan perhitungan bunga supaya pengecekan data keuangan lebih gampang ditelusuri.",
      details: ["Data anggota dan hak akses", "Transaksi dan buku besar", "Ekspor ringkasan ke Excel"]
    },
    {
      id: "vss-web",
      type: "Website dan katalog",
      title: "Website VSS Silver Bar",
      summary: "Website katalog yang ngasih akses ke informasi produk, harga, stok, verifikasi sertifikat, dan buyback dalam satu alur yang gampang dipakai.",
      details: ["Katalog dan harga produk", "Verifikasi sertifikat", "Informasi buyback"],
      image: "images/projects/vss-silver-bar-website.jpg",
      imageAlt: "Mockup website VSS Silver Bar di laptop dan ponsel"
    },
    {
      id: "victoeria-vicci-web",
      type: "Website dan katalog",
      title: "Website Victoeria Vicci",
      summary: "Website buat nunjukin koleksi dan layanan custom jewellery, sambil bikin calon pelanggan lebih gampang mulai konsultasi.",
      details: ["Koleksi perhiasan", "Layanan custom jewellery", "Konsultasi via WhatsApp"],
      image: "images/projects/victoeria-vicci-website.jpg",
      imageAlt: "Mockup website Victoeria Vicci di laptop dan ponsel"
    },
    {
      id: "vss-silver-bar-verification",
      type: "Sistem internal",
      title: "Verifikasi dan Admin VSS Silver Bar",
      summary: "Sistem buat ngatur data produk dan bantu proses verifikasi keaslian lewat nomor seri supaya data lebih gampang dicari dan ditelusuri.",
      details: ["Data produk dan nomor seri", "Panel administrasi", "Halaman verifikasi"],
      image: "images/projects/vss-silver-bar-verification.jpg",
      imageAlt: "Mockup panel administrasi dan verifikasi VSS Silver Bar"
    },
    {
      id: "victoeria-vicci-operations",
      type: "Sistem operasional",
      title: "Sistem Operasional Victoeria Vicci",
      summary: "Sistem internal buat bantu ngelola proses kerja, data master, status produksi, persediaan, penjualan, dan kebutuhan operasional lainnya.",
      details: ["Status produksi", "Persediaan dan penjualan", "Administrasi operasional"],
      image: "images/projects/victoeria-vicci-operations.jpg",
      imageAlt: "Mockup dashboard sistem operasional Victoeria Vicci"
    },
    {
      id: "tiara-erp",
      type: "Sistem operasional",
      title: "Tiara ERP",
      summary: "Sistem ERP yang dipakai buat ngebantu alur order, persediaan, produksi, pembelian, penjualan, sampai pencatatan biaya kerja.",
      details: ["Order dan inventori", "Produksi dan job costing", "Pembelian dan penjualan"],
      image: "images/projects/tiara-erp.jpg",
      imageAlt: "Mockup modul Tiara ERP di layar desktop"
    },
    {
      id: "3d-jewelry",
      type: "Teknologi produksi",
      title: "Mesin 3D Jewelry",
      summary: "Ngebantu ngecek alur dari prototype resin atau wax sampai hasil jadi, supaya detail desain dan proses produksi lebih gampang dikontrol.",
      details: ["Prototype resin atau wax", "Cek hasil cetak dan support", "Catatan perawatan bertahap"],
      image: "images/projects/3d-jewelry-workspace.jpg",
      imageAlt: "Area kerja 3D jewelry dengan printer wax resin dan prototype cincin"
    },
    {
      id: "laser-jewelry",
      type: "Teknologi produksi",
      title: "Mesin Laser Jewelry",
      summary: "Pengecekan dan perawatan perangkat laser buat welding, engraving, atau marking, biar alat tetap siap dipakai saat dibutuhin.",
      details: ["Laser welding", "Engraving dan marking", "Troubleshooting dan perawatan"],
      image: "images/projects/laser-jewelry-workshop.jpg",
      imageAlt: "Area kerja mesin laser jewelry untuk welding dan engraving"
    },
    {
      id: "infrastructure",
      type: "Operasional IT",
      title: "Infrastruktur IT",
      summary: "Ngerapiin jaringan, perangkat kerja, server atau NAS, dan jalur kabel supaya operasional harian lebih stabil dan gampang dicek.",
      details: ["Jaringan dan perangkat kerja", "Rack, server, dan NAS", "Dokumentasi dan cable management"],
      image: "images/projects/server-room-vss.jpg",
      imageAlt: "Server room dengan rack jaringan, server, NAS, UPS, dan monitoring CCTV"
    }
  ],
  experiences: [],
  education: [],
  skills: {}
};
