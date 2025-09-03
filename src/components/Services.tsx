// File: src/components/Services.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      title: "Website Statis",
      description: "Pembuatan website statis profesional untuk bisnis, portfolio, atau landing page dengan desain modern dan responsif.",
      icon: "💻",
      delay: 0.1
    },
    {
      title: "Tugas Sekolah",
      description: "Bantuan pengerjaan tugas sekolah berbagai mata pelajaran dengan penjelasan lengkap dan mudah dipahami.",
      icon: "📚",
      delay: 0.2
    },
    {
      title: "Dokumen Word/Excel",
      description: "Pembuatan dan formatting dokumen Word, laporan, presentasi, serta pengolahan data dengan Excel.",
      icon: "📊",
      delay: 0.3
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8">Layanan Kami</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            GabyTask menawarkan berbagai jasa profesional untuk membantu menyelesaikan tugas dan project Anda dengan hasil terbaik.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              <motion.button 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-4 text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              >
             
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;