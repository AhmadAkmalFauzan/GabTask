// File: src/components/Testimonials.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Raisa",
      role: "Siswa",
      content: "GabyTask bantu banget gua buat website portfolio. behh hasilnya bagus banget!",
      avatar: "R"
    },
    {
      name: "Galih Prasetyo",
      role: "Pelajar",
      content: "Thanks bet dahh, tugas word gua jadi bagus",
      avatar: "GP"
    },
    {
      name: "Michelle Alexandra",
      role: "Freelancer",
      content: "Makasih ya kak udah bantu tugas aku",
      avatar: "MA"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
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
    <section id="testimonials" className="py-16 bg-indigo-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Apa Kata Klien Kami?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Testimoni dari klien yang telah menggunakan layanan GabyTask.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-indigo-600 dark:text-indigo-300 font-bold">{testimonial.avatar}</span>
                </motion.div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-indigo-600 dark:text-indigo-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">"{testimonial.content}"</p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <motion.svg 
                    key={i} 
                    className="w-5 h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    whileHover={{ scale: 1.2 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;