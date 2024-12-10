'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { motion, useInView} from 'framer-motion';

import { QrCodeIcon, ChatBubbleLeftEllipsisIcon, Cog6ToothIcon, CubeIcon } from '@heroicons/react/24/solid';

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    title: 'Web Development',
    description:
      'We create responsive, high-performance websites tailored to your needs. Specializing in modern frameworks like Next.js.',
    icon: QrCodeIcon,
  },
  {
    title: 'AI Chatbot',
    description:
      'Build conversational AI solutions to interact with users efficiently using state-of-the-art chatbot technologies.',
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    title: 'Custom GPT',
    description:
      'Create personalized AI solutions based on GPT technology tailored to specific industries and business needs.',
    icon: Cog6ToothIcon,
  },
  {
    title: 'SmartRAG with Gemini',
    description:
      'Build RAG systems with Gemini to answer user queries from uploaded PDFs.',
    icon: CubeIcon,
  },
];

const OurServicesPage: React.FC = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
  return (
    <div className="min-h-screen bg-black text-white p-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
         <h4
        className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
        ref={ref}
      >
      My Services
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
        <p className="mt-4 text-lg text-gray-300">
          Empowering your business with cutting-edge technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg hover:shadow-2xl"
          >
            <div className="flex items-center mb-4">
              <service.icon className="h-12 w-12 text-white mr-4" />
              <h2 className="text-3xl font-bold">{service.title}</h2>
            </div>
            <p className="text-gray-100">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-400">
          Ready to transform your ideas into reality? Contact us today!
        </p>
      </motion.div>
    </div>
  );
};

export default OurServicesPage;

