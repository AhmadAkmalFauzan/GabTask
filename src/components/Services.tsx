// File: src/components/Services.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";


const WordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="h-10 w-10"
  >
    <path fill="#1976d2" d="M6 8h20v32H6z" />
    <path
      fill="#fff"
      d="M19.25 31.25h-2.4l-2.1-9.55-2.1 9.55h-2.4L7.35 17h2.45l1.7 9.65 2.1-9.65h2.35l2.1 9.65L19.7 17h2.45z"
    />
    <path fill="#42a5f5" d="M26 8h16v32H26z" />
  </svg>
);

const ExcelIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="h-10 w-10"
  >
    <path fill="#2e7d32" d="M6 8h20v32H6z" />
    <path
      fill="#fff"
      d="M18.5 31.25h-2.7l-2.65-5-2.65 5h-2.7l3.85-7-3.85-7h2.7l2.65 5 2.65-5h2.7l-3.85 7z"
    />
    <path fill="#4caf50" d="M26 8h16v32H26z" />
  </svg>
);

const websitePackages = [
  {
    id: 1,
    name: "HTML + CSS + JS",
    description: "Website statis dengan desain modern dan responsive",
    price: "Rp 20.000",
    features: ["Desain Responsif", "1 Halaman", "Revisi 3x"],
    popular: false,
  },
  {
    id: 2,
    name: "HTML + CSS + PHP",
    description: "Website dinamis dengan fungsionalitas PHP",
    price: "Rp 35.000",
    features: [
      "Semua fitur paket HTML+ CSS + JS",
      "Formulir kontak",
      "Halaman admin sederhana",
      "Revisi 3x",
    ],
    popular: false,
  },
  {
    id: 3,
    name: "HTML + CSS + LARAVEL",
    description: "Aplikasi web lengkap dengan framework Laravel",
    price: "Rp 75.000",
    features: [
      "Semua fitur paket PHP",
      "Database integration",
      "Authentication system",
      "Revisi 5x",
    ],
    popular: true,
  },
];

const otherServices = [
  {
    id: 1,
    title: "Tugas Sekolah",
    description:
      "Bantuan pengerjaan tugas sekolah berbagai mata pelajaran dengan penjelasan lengkap dan mudah dipahami.",
    icon: "📚",
    price: "Rp 15.000",
    features: ["Mata pelajaran umum", "Penjelasan mudah dipahami", "Revisi 2x"],
  },
  {
    id: 2,
    title: "Dokumen Word",
    description:
    "Pembuatan dan formatting dokumen Word, laporan, proposal, makalah, hingga presentasi.",
    icon: <WordIcon />,
    price: "Rp 25.000",
    features: ["Desain rapi & profesional", "Formatting otomatis", "Revisi 3x"],
  },
  {
    id: 3,
    title: "Dokumen Excel",
    description:
      "Pengolahan data, pembuatan laporan, grafik, dan analisis dengan Microsoft Excel.",
    icon: <ExcelIcon />,
    price: "Rp 25.000",
    features: [
      "Formula & fungsi otomatis",
      "Grafik & visualisasi",
      "Revisi 3x",
    ],
  },
];

const Services: React.FC = () => {
  const [tab, setTab] = useState<"website" | "other">("website");

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Layanan Kami
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan mulai dari pembuatan website
            hingga bantuan tugas dan dokumen. Pilih kategori di bawah ini 🚀
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 space-x-4">
          <button
            onClick={() => setTab("website")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              tab === "website"
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Paket Website
          </button>
          <button
            onClick={() => setTab("other")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              tab === "other"
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Paket yang lain
          </button>
        </div>

        {/* Website Packages */}
        {tab === "website" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {websitePackages.map((service, i) => (
              <motion.div
                key={service.id}
                className={`relative flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
                  service.popular ? "ring-2 ring-blue-600 scale-105" : ""
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {service.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-sm font-semibold text-white shadow-md">
                    ⭐ Paling Populer
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
                <p className="mt-6 text-4xl font-extrabold text-gray-900 dark:text-white">
                  {service.price}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="https://www.instagram.com/pluviozann?igsh=OWdhMWtxZHprM2Jj"
                  className="mt-8 block w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-center font-semibold text-white shadow hover:shadow-blue-400/50"
                  whileHover={{ scale: 1.05 }}
                >
                  Pesan Sekarang
                </motion.a>
              </motion.div>
            ))}
          </div>
        )}

        {/* Word & Excel */}
        {tab === "other" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {otherServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              >
                {/* Icon */}
                <div className="text-5xl mb-4">{service.icon}</div>

                {/* Title & description */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>

                {/* Price */}
                <p className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                  {service.price}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="https://www.instagram.com/pluviozann?igsh=OWdhMWtxZHprM2Jj"
                  className="mt-8 block w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-center font-semibold text-white shadow hover:shadow-blue-400/50"
                  whileHover={{ scale: 1.05 }}
                >
                  Pesan Sekarang
                </motion.a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
