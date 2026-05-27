import { useMemo, useState } from 'react';

export default function InventoryControlLearningPortal() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  const glossary = [
    ['ABC Analysis', 'Metode klasifikasi inventory berdasarkan nilai dan frekuensi penggunaan.'],
    ['Backorder', 'Pesanan customer yang tertunda karena stok kosong.'],
    ['Bin Location', 'Lokasi penyimpanan barang di rak atau gudang.'],
    ['Buffer Stock', 'Cadangan stok tambahan untuk kondisi darurat.'],
    ['COGS', 'Cost of Goods Sold atau harga pokok penjualan.'],
    ['Cycle Count', 'Stock opname bertahap tanpa menghentikan operasional gudang.'],
    ['Dead Stock', 'Barang yang tidak bergerak dalam waktu lama.'],
    ['ERP', 'Enterprise Resource Planning untuk integrasi sistem perusahaan.'],
    ['FEFO', 'First Expired First Out. Barang expired tercepat keluar lebih dahulu.'],
    ['FIFO', 'First In First Out. Barang pertama masuk keluar lebih dahulu.'],
    ['Forecasting', 'Prediksi kebutuhan barang di masa depan.'],
    ['GRN', 'Goods Receipt Note atau dokumen penerimaan barang.'],
    ['Inventory Accuracy', 'Tingkat akurasi antara stok fisik dan sistem.'],
    ['Inventory Control', 'Pengendalian inventory agar stok tetap optimal dan akurat.'],
    ['Lead Time', 'Waktu antara pemesanan barang hingga barang diterima.'],
    ['Picking', 'Pengambilan barang dari lokasi rak.'],
    ['Put Away', 'Proses penempatan barang ke lokasi penyimpanan.'],
    ['Reorder Point', 'Titik pemesanan ulang stok.'],
    ['Safety Stock', 'Cadangan stok untuk menghindari stockout.'],
    ['Shrinkage', 'Kehilangan stok akibat pencurian, kerusakan, atau kesalahan.'],
    ['Slow Moving', 'Barang yang pergerakannya lambat.'],
    ['Stock Opname', 'Pengecekan fisik stok terhadap sistem.'],
    ['Stockout', 'Kondisi kehabisan stok barang.'],
    ['WMS', 'Warehouse Management System.']
  ];

  const quizQuestions = [
    {
      question: 'Apa arti FIFO?',
      options: [
        'First In First Out',
        'Fast Inventory Flow Operation',
        'Final Input Final Output'
      ],
      answer: 'First In First Out'
    },
    {
      question: 'Apa fungsi safety stock?',
      options: [
        'Mengurangi stok',
        'Cadangan untuk mencegah stockout',
        'Menghapus barang rusak'
      ],
      answer: 'Cadangan untuk mencegah stockout'
    },
    {
      question: 'Apa itu stock opname?',
      options: [
        'Pengecekan fisik stok',
        'Pembelian barang',
        'Pengiriman barang'
      ],
      answer: 'Pengecekan fisik stok'
    }
  ];

  const filteredGlossary = useMemo(() => {
    return glossary.filter(([term, desc]) =>
      `${term} ${desc}`.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, glossary]);

  const modules = [
    {
      title: 'Dasar Inventory',
      desc: 'Mempelajari konsep inventory, jenis stok, fungsi gudang, dan alur supply chain.'
    },
    {
      title: 'Warehouse Workflow',
      desc: 'Receiving, put away, storage, picking, packing, shipping, dan return process.'
    },
    {
      title: 'Excel Inventory',
      desc: 'Belajar formula, dashboard, pivot table, stock card, dan reporting.'
    },
    {
      title: 'ERP & WMS',
      desc: 'Belajar SAP, Odoo, Oracle, Accurate, dan software warehouse modern.'
    },
    {
      title: 'KPI & Forecast',
      desc: 'Belajar inventory turnover, aging stock, forecasting, dan analisa inventory.'
    },
    {
      title: 'Leadership',
      desc: 'Mengatur tim gudang, audit, SOP, dan continuous improvement.'
    }
  ];

  const workflow = [
    'Forecast',
    'Purchase Request',
    'Purchase Order',
    'Receiving',
    'Quality Check',
    'Put Away',
    'Storage',
    'Picking',
    'Packing',
    'Delivery',
    'Stock Opname',
    'Adjustment',
    'Reporting'
  ];

  const formulas = [
    {
      title: 'Stock Akhir',
      formula: 'Stock Awal + Barang Masuk - Barang Keluar'
    },
    {
      title: 'Reorder Point',
      formula: '(Pemakaian Harian × Lead Time) + Safety Stock'
    },
    {
      title: 'Inventory Accuracy',
      formula: '(Stock Akurat ÷ Total Item) × 100%'
    },
    {
      title: 'Inventory Turnover',
      formula: 'COGS ÷ Average Inventory'
    },
    {
      title: 'Safety Stock',
      formula: '(Pemakaian Maksimum × Lead Time Maksimum) - Average Usage'
    }
  ];

  const interview = [
    'Apa perbedaan FIFO dan FEFO?',
    'Bagaimana cara menangani selisih stok?',
    'Apa penyebab stockout?',
    'Bagaimana cara melakukan stock opname?',
    'Apa fungsi safety stock?',
    'Apa pengalaman menggunakan ERP atau WMS?'
  ];

  const roadmap = [
    'Belajar dasar gudang dan inventory',
    'Menguasai Excel inventory',
    'Belajar stock opname dan FIFO',
    'Belajar ERP / WMS',
    'Belajar KPI inventory dan forecasting',
    'Belajar Power BI dan SQL',
    'Belajar leadership dan supply chain'
  ];

  const kpi = [
    'Inventory Accuracy',
    'Inventory Turnover',
    'Stock Aging',
    'Shrinkage Rate',
    'Order Fulfillment',
    'Warehouse Productivity'
  ];

  const submitQuiz = () => {
    const answers = document.querySelectorAll('[data-answer]');
    let score = 0;

    answers.forEach((item) => {
      if (item.dataset.answer === item.value) {
        score += 1;
      }
    });

    setQuizScore(score);
    setQuizDone(true);
  };

  return (
    <div className={`${darkMode ? 'dark bg-slate-950 text-white' : 'bg-slate-100 text-slate-800'} min-h-screen transition-all duration-300`}>
      <header className={`${darkMode ? 'bg-black' : 'bg-slate-900'} text-white p-10 shadow-xl`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-5">
            Inventory Control Academy
          </h1>
          <p className="text-xl max-w-4xl leading-relaxed text-slate-300">
            Platform pembelajaran lengkap tentang Inventory Control, Warehouse,
            Supply Chain, ERP, Stock Management, dan Logistics dari level pemula
            sampai expert.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        <section className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-6">
          <div>
            <h2 className="text-2xl font-bold">Control Panel</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Search glossary, toggle dark mode, dan eksplorasi modul inventory.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <input
              type="text"
              placeholder="Cari istilah inventory..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700"
            />

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-5 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-black font-semibold"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </section>
        <section className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="text-4xl font-bold">100+</div>
            <div className="mt-2 text-slate-600">Istilah Inventory</div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="text-4xl font-bold">7</div>
            <div className="mt-2 text-slate-600">Tahapan Roadmap</div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="text-4xl font-bold">13</div>
            <div className="mt-2 text-slate-600">Workflow Gudang</div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <div className="text-4xl font-bold">Professional</div>
            <div className="mt-2 text-slate-600">Learning System</div>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Apa Itu Inventory Control?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="leading-relaxed text-lg">
                Inventory Control adalah proses pengelolaan dan pengendalian stok
                barang agar perusahaan memiliki jumlah stok yang optimal,
                akurat, efisien, dan selalu tersedia saat dibutuhkan.
              </p>

              <div className="mt-6 space-y-3">
                <div className="bg-slate-100 rounded-xl p-4">
                  Mengurangi kerugian perusahaan
                </div>
                <div className="bg-slate-100 rounded-xl p-4">
                  Meningkatkan efisiensi gudang
                </div>
                <div className="bg-slate-100 rounded-xl p-4">
                  Menjaga akurasi stok
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-5">Bidang Industri</h3>

              <div className="grid grid-cols-2 gap-4">
                {['FMCG', 'Retail', 'Manufaktur', 'Farmasi', 'E-commerce', 'Logistik'].map((item) => (
                  <div
                    key={item}
                    className="bg-slate-800 rounded-xl p-4 text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Workflow Inventory Control</h2>

          <div className="grid md:grid-cols-4 gap-4">
            {workflow.map((item, index) => (
              <div
                key={item}
                className="bg-slate-100 border border-slate-200 rounded-2xl p-5"
              >
                <div className="text-sm font-bold text-slate-500">
                  STEP {index + 1}
                </div>
                <div className="mt-3 font-semibold text-lg">{item}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Modul Pembelajaran</h2>

            <div className="space-y-4">
              {modules.map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-100 rounded-2xl p-5"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">KPI Inventory</h2>

            <div className="grid grid-cols-2 gap-4">
              {kpi.map((item) => (
                <div
                  key={item}
                  className="bg-slate-100 rounded-xl p-5 font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Kamus Inventory Control</h2>

          <div className="grid md:grid-cols-2 gap-5">
            {filteredGlossary.map(([term, desc]) => (
              <div
                key={term}
                className="border border-slate-200 rounded-2xl p-5"
              >
                <h3 className="text-xl font-bold">{term}</h3>
                <p className="mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Rumus Penting</h2>

            <div className="space-y-4">
              {formulas.map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-100 rounded-2xl p-5"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <div className="mt-3 font-mono text-sm bg-white rounded-xl p-3 border">
                    {item.formula}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Pertanyaan Interview</h2>

            <div className="space-y-4">
              {interview.map((item, index) => (
                <div
                  key={item}
                  className="border rounded-2xl p-5"
                >
                  <div className="font-bold text-slate-500 mb-2">
                    QUESTION {index + 1}
                  </div>
                  <div className="text-lg">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Roadmap Menjadi Expert</h2>

          <div className="space-y-4">
            {roadmap.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5 bg-slate-100 rounded-2xl p-5"
              >
                <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>

                <div className="font-semibold text-lg">{item}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Quiz Inventory Control</h2>

          <div className="space-y-6">
            {quizQuestions.map((item, index) => (
              <div
                key={item.question}
                className="border dark:border-slate-700 rounded-2xl p-5"
              >
                <h3 className="text-xl font-bold mb-4">
                  {index + 1}. {item.question}
                </h3>

                <select
                  data-answer={item.answer}
                  className="w-full px-4 py-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700"
                >
                  <option>Pilih Jawaban</option>
                  {item.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <button
              onClick={submitQuiz}
              className="px-6 py-4 rounded-2xl bg-slate-900 text-white font-bold"
            >
              Submit Quiz
            </button>

            {quizDone && (
              <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-5 text-xl font-bold">
                Score Anda: {quizScore} / {quizQuestions.length}
              </div>
            )}
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-5">Software Populer</h2>

            <ul className="space-y-3 list-disc pl-5">
              <li>SAP</li>
              <li>Oracle NetSuite</li>
              <li>Odoo</li>
              <li>Accurate</li>
              <li>Microsoft Excel</li>
              <li>Power BI</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-5">Masalah Umum</h2>

            <ul className="space-y-3 list-disc pl-5">
              <li>Selisih stok</li>
              <li>Overstock</li>
              <li>Stockout</li>
              <li>Barang rusak</li>
              <li>Human error</li>
              <li>Dead stock</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-5">Skill Penting</h2>

            <ul className="space-y-3 list-disc pl-5">
              <li>Analytical thinking</li>
              <li>Excel advanced</li>
              <li>Problem solving</li>
              <li>ERP/WMS</li>
              <li>Leadership</li>
              <li>Communication</li>
            </ul>
          </div>
        </section>

        <section className="bg-slate-900 text-white rounded-3xl shadow-lg p-10">
          <h2 className="text-4xl font-bold mb-6">
            GitHub Deployment Guide
          </h2>

          <div className="space-y-5 text-slate-300 leading-relaxed">
            <div>
              1. Install Node.js dan npm
            </div>

            <div>
              2. Buat project menggunakan Vite:
            </div>

            <div className="bg-black rounded-2xl p-5 font-mono text-sm overflow-auto">
              npm create vite@latest inventory-learning -- --template react
            </div>

            <div>
              3. Install dependency:
            </div>

            <div className="bg-black rounded-2xl p-5 font-mono text-sm overflow-auto">
              npm install
            </div>

            <div>
              4. Jalankan project:
            </div>

            <div className="bg-black rounded-2xl p-5 font-mono text-sm overflow-auto">
              npm run dev
            </div>

            <div>
              5. Upload ke GitHub lalu deploy menggunakan GitHub Pages atau Vercel.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
