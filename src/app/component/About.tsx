

// 'use client';

// import React, { useEffect, useState, useRef } from 'react';
// import { motion, useInView, AnimatePresence } from 'framer-motion';
// import { 
//   Code, 
//   Brain, 
//   Globe, 
// } from 'lucide-react';
// import Image from 'next/image';

// export default function About() {
//   const [setIsInView] = useState(false);
//   const [activeSkill, setActiveSkill] = useState<string | null>(null);
//   const headingRef = useRef(null);
//   const sectionRef = useRef(null);
//   const headingInView = useInView(headingRef, { once: true });
//   const sectionInView = useInView(sectionRef, { once: true });

//   // Dynamic Skills
//   const dynamicSkills = [
//     {
//       icon: Code,
//       title: 'Web Development',
//       description: 'Crafting responsive and innovative web experiences using modern technologies.',
//       color: 'text-blue-500'
//     },
//     {
//       icon: Brain,
//       title: 'AI Exploration',
//       description: 'Diving deep into generative AI and exploring cutting-edge machine learning techniques.',
//       color: 'text-purple-500'
//     },
//     {
//       icon: Globe,
//       title: 'Global Perspective',
//       description: 'Bringing a multicultural approach to digital solutions from Karachi, Pakistan.',
//       color: 'text-green-500'
//     }
//   ];

//   // Intersection Observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const [entry] = entries;
//         if (entry.isIntersecting) {
//           setIsInView(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const element = sectionRef.current;
//     if (element) {
//       observer.observe(element);
//     }

//     return () => {
//       if (element) {
//         observer.unobserve(element);
//       }
//     };
//   }, []);

//   return (
//     <div className="bg-black text-white py-16 overflow-hidden">
//       <motion.div
//         ref={sectionRef}
//         initial={{ opacity: 0, y: 50 }}
//         animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.8 }}
//         className="sm:flex items-center justify-center max-w-screen-xl mx-auto px-6 sm:px-12"
//       >
//         {/* Left Section with Animated Image */}
//         <div className="sm:w-1/2 p-10 flex justify-center">
//           <motion.div 
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ 
//               type: 'spring', 
//               stiffness: 200, 
//               damping: 10,
//               delay: 0.3
//             }}
//             className="relative group"
//           >
//             <Image
//               src="/WbQnbas_d.webp"
//               height={500}
//               width={500}
//               alt="Profile"
//               className="w-full h-auto rounded-2xl shadow-2xl 
//                          transition-all duration-500 
//                          group-hover:scale-105 
//                          group-hover:shadow-2xl 
//                          group-hover:rotate-2"
//             />
//             <p>Hello! I&apos;m Wasif Hasan...</p>
//             {/* Animated Glow Effect */}
//             <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-purple-600 
//                             rounded-2xl opacity-30 group-hover:opacity-50 
//                             blur-3xl transition-all duration-500 -z-10"></div>
//           </motion.div>
//         </div>

//         {/* Right Section with Dynamic Content */}
//         <div className="sm:w-1/2 p-5">
//           <div className="text">
//             {/* Animated Heading */}
//             <motion.h4
//               ref={headingRef}
//               initial={{ opacity: 0, x: 50 }}
//               animate={headingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//               transition={{ duration: 0.6 }}
//               className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
//             >
//               About Me
//             </motion.h4>

//             {/* Animated Zigzag Line */}
//             {headingInView && (
//               <motion.div
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{ duration: 1, ease: 'easeInOut' }}
//                 className="w-80 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-8 mx-auto origin-left"
//               ></motion.div>
//             )}

//             {/* Description with Animated Intro */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//               className="text-gray-300 text-lg font-semibold text-center mb-8"
//             >
//               Hello! I'm Wasif Hasan, from Karachi, Pakistan. I have a strong
//               passion for web development and enjoy creating innovative and
//               functional websites.
//             </motion.p>

//             {/* Dynamic Skills Section */}
//             <div className="space-y-4">
//               {dynamicSkills.map((skill, index) => (
//                 <motion.div
//                   key={skill.title}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//                   transition={{ 
//                     duration: 0.6, 
//                     delay: index * 0.2 
//                   }}
//                 >
//                   <motion.div
//                     onHoverStart={() => setActiveSkill(skill.title)}
//                     onHoverEnd={() => setActiveSkill(null)}
//                     className="flex items-center p-4 bg-gray-900 rounded-xl 
//                                border border-gray-800 hover:border-purple-600 
//                                transition-all duration-300 cursor-pointer"
//                   >
//                     <skill.icon 
//                       className={`mr-4 ${skill.color} transition-all`} 
//                       size={36} 
//                     />
//                     <div className="flex-grow">
//                       <h5 className="text-xl font-bold">{skill.title}</h5>
//                       <AnimatePresence>
//                         {activeSkill === skill.title && (
//                           <motion.p
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: 'auto' }}
//                             exit={{ opacity: 0, height: 0 }}
//                             className="text-gray-400 mt-2"
//                           >
//                             {skill.description}
//                           </motion.p>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Code, Brain, Globe } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const headingRef = useRef(null);
  const sectionRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });
  const sectionInView = useInView(sectionRef, { once: true });

  // Dynamic Skills
  const dynamicSkills = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Crafting responsive and innovative web experiences using modern technologies.',
      color: 'text-blue-500',
    },
    {
      icon: Brain,
      title: 'AI Exploration',
      description: 'Diving deep into generative AI and exploring cutting-edge machine learning techniques.',
      color: 'text-purple-500',
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Bringing a multicultural approach to digital solutions from Karachi, Pakistan.',
      color: 'text-green-500',
    },
  ];

  return (
    <div className="bg-black text-white py-16 overflow-hidden">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="sm:flex items-center justify-center max-w-screen-xl mx-auto px-6 sm:px-12"
      >
        {/* Left Section */}
        <div className="sm:w-1/2 p-10 flex justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 10,
              delay: 0.3,
            }}
            className="relative group"
          >
            <Image
              src="/WbQnbas_d.webp"
              height={500}
              width={500}
              alt="Profile"
              className="w-full h-auto rounded-2xl shadow-2xl 
                         transition-all duration-500 
                         group-hover:scale-105 
                         group-hover:shadow-2xl 
                         group-hover:rotate-2"
            />
            <p>Hello! I&apos;m Wasif Hasan...</p>
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-purple-600 
                            rounded-2xl opacity-30 group-hover:opacity-50 
                            blur-3xl transition-all duration-500 -z-10"></div>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="sm:w-1/2 p-5">
          <motion.h4
            ref={headingRef}
            initial={{ opacity: 0, x: 50 }}
            animate={headingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
          >
            About Me
          </motion.h4>

          {headingInView && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="w-80 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-8 mx-auto origin-left"
            ></motion.div>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-300 text-lg font-semibold text-center mb-8"
          >
            Hello! I&apos;m Wasif Hasan, from Karachi, Pakistan. I have a strong
            passion for web development and enjoy creating innovative and
            functional websites.
          </motion.p>

          <div className="space-y-4">
            {dynamicSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: -50 }}
                animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
              >
                <motion.div
                  onHoverStart={() => setActiveSkill(skill.title)}
                  onHoverEnd={() => setActiveSkill(null)}
                  className="flex items-center p-4 bg-gray-900 rounded-xl 
                               border border-gray-800 hover:border-purple-600 
                               transition-all duration-300 cursor-pointer"
                >
                  <skill.icon
                    className={`mr-4 ${skill.color} transition-all`}
                    size={36}
                  />
                  <div className="flex-grow">
                    <h5 className="text-xl font-bold">{skill.title}</h5>
                    <AnimatePresence>
                      {activeSkill === skill.title && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-gray-400 mt-2"
                        >
                          {skill.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
