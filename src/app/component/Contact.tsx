// 'use client';


// import Swal from 'sweetalert2';
// import React, { useRef,useState } from 'react';
// import { motion , useInView} from 'framer-motion';
// const ContactSection: React.FC = () => {
//     const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
//     const ref = useRef(null);
//     const inView = useInView(ref, { once: true });
//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     const formData = new FormData(event.target as HTMLFormElement);
    
//     // Adding access key for Web3Forms API
//     formData.append("access_key", "0650d64b-3156-4a3d-8d44-774e6408e563");

//     const formObject = Object.fromEntries(formData.entries());
//     const json = JSON.stringify(formObject);

//     try {
//       // Display loading indicator
//       Swal.fire({
//         title: 'Sending...',
//         text: 'Please wait while we send your message',
//         allowOutsideClick: false,
//         didOpen: () => {
//           Swal.showLoading(null); // Pass null to satisfy TypeScript
//         }
//       });

//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//         body: json,
//       });

//       const result = await response.json();
//       Swal.close(); // Close the loading indicator

//       if (result.success) {
//         Swal.fire({
//           title: "Success!",
//           text: "Message sent successfully!",
//           icon: "success",
//         });
//       } else {
//         Swal.fire({
//           title: "Error!",
//           text: "Failed to send message. Please try again.",
//           icon: "error",
//         });
//       }
//     } catch (error) {
//       Swal.close(); // Close the loading indicator in case of error
//       Swal.fire({
//         title: "Error!",
//         text: "An error occurred. Please try again later.",
//         icon: "error",
//       });
//       console.error('Error:', error);
//     }
//   }

//   return (
//     <section id="contact" className="py-20 bg-black text-white">
//       <div className="container mx-auto">
//       <h4
//         className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
//         ref={ref}
//       >
//      Contact 
//       </h4>

//       {/* Zigzag Line Under Heading */}
//       {inView && (
//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ duration: 2, ease: 'easeInOut' }}
//           className="w-80 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-8 mx-auto origin-left"
//         ></motion.div>
//       )}
//         <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto" data-aos="fade-up">
//           <div className="mb-4">
//             <label className="block text-gray-300">Name</label>
//             <input
//               type="text"
//               name="name"
//               required
//               className="w-full px-4 py-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-300">Email</label>
//             <input
//               type="email"
//               name="email"
//               required
//               className="w-full px-4 py-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-300">Message</label>
//             <textarea
//               name="message"
//               required
//               className="w-full px-4 py-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//               rows={4}
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full px-6 py-3 bg-gray-800  text-white rounded-lg  transition transform hover:scale-105"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;


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

    // Using environment variable for API key
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '');

    const formObject = Object.fromEntries(formData.entries());
    const json = JSON.stringify(formObject);

    try {
      Swal.fire({
        title: 'Sending...',
        text: 'Please wait while we send your message',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const result = await response.json();
      Swal.close();

      if (result.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Message sent successfully!',
          icon: 'success',
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to send message. Please try again.',
          icon: 'error',
        });
      }
    } catch (error) {
      Swal.close();
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred. Please try again later.',
        icon: 'error',
      });
      console.error('Error:', error);
    }
  }

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto">
        <h4
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
          ref={ref}
        >
          Contact
        </h4>

        {/* Zigzag Line Under Heading */}
        {inView && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="w-80 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-8 mx-auto origin-left"
          ></motion.div>
        )}

        <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Message</label>
            <textarea
              name="message"
              required
              className="w-full px-4 py-2 border border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gray-800 text-white rounded-lg transition-all transform hover:scale-105 hover:bg-teal-600"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
