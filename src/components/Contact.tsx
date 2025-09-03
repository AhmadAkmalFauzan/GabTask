// File: src/components/Contact.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      name: "Instagram",
      handle: "@gabytask",
      url: "https://instagram.com/gabytask",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      color: "bg-gradient-to-r from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700"
    },
    {
      name: "WhatsApp",
      handle: "+62 812 3456 7890",
      url: "https://wa.me/6281234567890",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.49"/>
        </svg>
      ),
      color: "bg-gradient-to-r from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700"
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
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Hubungi Kami</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tertarik dengan layanan kami? Silakan hubungi melalui Instagram atau WhatsApp kami.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className={`${method.color} ${method.hoverColor} rounded-2xl p-6 text-white shadow-lg transition-all duration-300 transform flex flex-col items-center justify-center space-y-4`}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-3 bg-white/20 rounded-full"
              >
                {method.icon}
              </motion.div>
              <h3 className="text-xl font-semibold">{method.name}</h3>
              <p className="text-white/90">{method.handle}</p>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center mt-2 text-sm font-medium"
              >
                Hubungi Kami <span className="ml-1">→</span>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            Atau email kami di{' '}
            <a href="mailto:hello@gabytask.com" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
              hello@gabytask.com
            </a>
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
            Biasanya kami membalas dalam 1-2 jam pada jam kerja
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;