
// "use client"
// import React, { useRef,useState } from 'react';
// import { motion, AnimatePresence , useInView} from 'framer-motion';
// import { 
//   Code, 
//   Terminal, 
//   Globe, 
//   Layout, 
//   Box 
// } from 'lucide-react';

// // Skill type definition
// interface Skill {
//   name: string;
//   level: number;
//   category: string;
//   icon: React.ComponentType;
//   description: string;
// }

// // Skills data focused on specified technologies
// const skillsData: Skill[] = [
  
//   {
//     name: 'Next.js',
//     level: 92,
//     category: 'Framework',
//     icon: Box,
//     description: 'Modern React framework for building efficient and scalable web applications with server-side rendering'
//   },
//   {
//     name: 'TypeScript',
//     level: 88,
//     category: 'Language',
//     icon: Code,
//     description: 'Strongly typed programming language that enhances JavaScript with advanced type checking'
//   },
//   {
//     name: 'Tailwind CSS',
//     level: 90,
//     category: 'Styling',
//     icon: Layout,
//     description: 'Utility-first CSS framework for rapid and flexible UI development'
//   },
//   {
//     name: 'HTML',
//     level: 95,
//     category: 'Markup',
//     icon: Globe,
//     description: 'Standard markup language for creating web page structure and content'
//   },
//   {
//     name: 'CSS',
//     level: 87,
//     category: 'Styling',
//     icon: Layout,
//     description: 'Styling language for designing and laying out web pages'
//   },
//   {
//     name: 'Python',
//     level: 85,
//     category: 'Language',
//     icon: Terminal,
//     description: 'Versatile programming language used for web development, data science, and more'
//   }
// ];

// const SkillsPage: React.FC = () => {
//   const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true });
//   // Skill color gradients
//   const getSkillGradient = (level: number) => {
//     if (level >= 90) return 'from-purple-600 to-indigo-800';
//     if (level >= 80) return 'from-blue-600 to-cyan-700';
//     if (level >= 70) return 'from-green-600 to-teal-700';
//     return 'from-yellow-600 to-orange-700';
//   };

//   return (
//     <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-4xl w-full"
//       >
//         {/* <h1 className="text-4xl font-extrabold mb-12 text-center 
//           text-transparent bg-clip-text 
//           text-white">
//           My Technical Skill
//         </h1> */}
//   <h4
//         className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
//         ref={ref}
//       >
//         My Technical Skills
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
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//           {skillsData.map((skill) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ 
//                 duration: 0.5, 
//                 delay: skillsData.indexOf(skill) * 0.1 
//               }}
//               onHoverStart={() => setHoveredSkill(skill.name)}
//               onHoverEnd={() => setHoveredSkill(null)}
//               className="bg-gray-900 rounded-2xl p-6 relative overflow-hidden 
//                          border border-gray-800 transform transition-all 
//                          hover:scale-105 hover:border-purple-600 group"
//             >
//               {/* Animated Background */}
//               <motion.div
//                 initial={{ width: '0%' }}
//                 animate={{ 
//                   width: hoveredSkill === skill.name ? '100%' : '0%',
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 z-0"
//               />

//               <div className="relative z-10 flex flex-col items-center">
//                 {/* Animated Icon */}
//                 <motion.div
//                   animate={{
//                     rotate: hoveredSkill === skill.name ? [0, 10, -10, 0] : 0,
//                     scale: hoveredSkill === skill.name ? 1.1 : 1
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <skill.icon 
                  
//                   />
//                 </motion.div>

//                 <h3 className="text-xl font-semibold mb-2 text-center">
//                   {skill.name}
//                 </h3>

//                 {/* Skill Level Bar */}
//                 <div className="w-full bg-gray-800 rounded-full h-2 mt-2 overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     animate={{ width: `${skill.level}%` }}
//                     transition={{ duration: 1, delay: 0.2 }}
//                     className={`
//                       h-full bg-gradient-to-r ${getSkillGradient(skill.level)}
//                     `}
//                   />
//                 </div>

//                 {/* Hover Description */}
//                 <AnimatePresence>
//                   {hoveredSkill === skill.name && (
//                     <motion.p
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="text-sm text-gray-300 mt-3 text-center"
//                     >
//                       {skill.description}
//                     </motion.p>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default SkillsPage;

'use client'
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Code, Terminal, Globe, Layout, Box } from 'lucide-react';

// Skill type definition
interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ComponentType;
  description: string;
}

// Skills data focused on specified technologies
const skillsData: Skill[] = [
  {
    name: 'Next.js',
    level: 92,
    category: 'Framework',
    icon: Box,
    description: 'Modern React framework for building efficient and scalable web applications with server-side rendering'
  },
  {
    name: 'TypeScript',
    level: 88,
    category: 'Language',
    icon: Code,
    description: 'Strongly typed programming language that enhances JavaScript with advanced type checking'
  },
  {
    name: 'Tailwind CSS',
    level: 90,
    category: 'Styling',
    icon: Layout,
    description: 'Utility-first CSS framework for rapid and flexible UI development'
  },
  {
    name: 'HTML',
    level: 95,
    category: 'Markup',
    icon: Globe,
    description: 'Standard markup language for creating web page structure and content'
  },
  {
    name: 'CSS',
    level: 87,
    category: 'Styling',
    icon: Layout,
    description: 'Styling language for designing and laying out web pages'
  },
  {
    name: 'Python',
    level: 85,
    category: 'Language',
    icon: Terminal,
    description: 'Versatile programming language used for web development, data science, and more'
  }
];

const SkillsPage: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Skill color gradients
  const getSkillGradient = (level: number) => {
    if (level >= 90) return 'from-purple-600 to-indigo-800';
    if (level >= 80) return 'from-blue-600 to-cyan-700';
    if (level >= 70) return 'from-green-600 to-teal-700';
    return 'from-yellow-600 to-orange-700';
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
      >
        <h4
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
          ref={ref}
        >
          My Technical Skills
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: skillsData.indexOf(skill) * 0.1
              }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="bg-gray-900 rounded-2xl p-6 relative overflow-hidden border border-gray-800 transform transition-all hover:scale-105 hover:border-purple-600 group"
            >
              {/* Animated Background */}
              <motion.div
                initial={{ width: '0%' }}
                animate={{
                  width: hoveredSkill === skill.name ? '100%' : '0%',
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 z-0"
              />

              <div className="relative z-10 flex flex-col items-center">
                {/* Animated Icon */}
                <motion.div
                  animate={{
                    rotate: hoveredSkill === skill.name ? [0, 10, -10, 0] : 0,
                    scale: hoveredSkill === skill.name ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <skill.icon />
                </motion.div>

                <h3 className="text-xl font-semibold mb-2 text-center">
                  {skill.name}
                </h3>

                {/* Skill Level Bar */}
                <div className="w-full bg-gray-800 rounded-full h-2 mt-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`
                      h-full bg-gradient-to-r ${getSkillGradient(skill.level)}
                    `}
                  />
                </div>

                {/* Hover Description */}
                <AnimatePresence>
                  {hoveredSkill === skill.name && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-gray-300 mt-3 text-center"
                    >
                      {skill.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
