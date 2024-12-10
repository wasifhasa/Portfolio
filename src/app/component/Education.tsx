
'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Education: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const Education = [
    {
      degree: 'Matriculation',
      institution: 'Mighty Minds Academy',
      year: '2021',
      description: 'Completed matriculation with a strong focus on science and mathematics.',
      color: '#FF6464',
    },
    {
      degree: 'Intermediate',
      institution: 'Boys College Bufferzone',
      year: '2024',
      description: 'Specialized in Pre-Engineering with excellent grades in Physics and Mathematics.',
      color: '#5185D4',
    },
    {
      degree: 'Certified Cloud Applied Generative AI Engineer',
      institution: 'PIAIC (Present)',
      year: '2024',
      description: 'Earned expertise in leveraging cloud platforms to build and deploy advanced Generative AI solutions.',
      color: '#9272D4',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      {/* Heading Section */}
      <h4
        className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
        ref={ref}
      >
        Education
      </h4>

      {/* Zigzag Line Under Heading */}
      {inView && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="w-80 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-8 mx-auto origin-left"
        ></motion.div>
      )}

      {/* Certification Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {Education.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 relative overflow-hidden group"
          >
            {/* Hover Effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent to-[color:cert.color] opacity-0 group-hover:opacity-40 transition-all"
              style={{ background: `linear-gradient(120deg, transparent, ${cert.color})` }}
            ></div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-[color:cert.color] transition-all">
              {cert.degree}
            </h3>
            <p className="text-gray-300 mb-4">{cert.description}</p>
            <p className="text-gray-500 text-sm italic">{cert.institution}</p>
            <p className="text-gray-500 text-sm">{cert.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;

// 'use client'
