// File: src/components/Footer.tsx
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-indigo-400 font-bold text-2xl">Gaby</span>
              <span className="text-white font-bold text-2xl">Task</span>
            </div>
            <p className="text-gray-400">
              Menyediakan jasa pembuatan website statis, pengerjaan tugas
              sekolah, dan pembuatan dokumen profesional.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Website Statis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tugas Sekolah
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dokumen Word/Excel
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">+62 812 3456 7890</li>
              <li className="text-gray-400">Jakarta Timur, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2023 GabyTask. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/pluviozann?igsh=OWdhMWtxZHprM2Jj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500 transition" />
            </a>
            <a
              href="https://wa.me/+6285719005632"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl cursor-pointer hover:text-green-500 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
