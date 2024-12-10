'use client';

import Swal from 'sweetalert2';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '');

    const json = JSON.stringify(Object.fromEntries(formData.entries()));

    try {
      Swal.fire({
        title: 'Sending...',
        text: 'Please wait while we send your message',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: json,
      });

      const result = await response.json();
      Swal.close();

      if (result.success) {
        Swal.fire('Success!', 'Message sent successfully!', 'success');
      } else {
        Swal.fire('Error!', 'Failed to send message. Please try again.', 'error');
      }
    } catch {
      Swal.close();
      Swal.fire('Error!', 'An error occurred. Please try again later.', 'error');
    }
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-black text-white">
      <div className="container mx-auto">
        <h4
          ref={ref}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center"
        >
          Contact
        </h4>

        {inView && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="w-40 sm:w-60 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mx-auto mb-8"
          />
        )}

        <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 text-gray-900 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 text-gray-900 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2 text-gray-900 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-400"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
