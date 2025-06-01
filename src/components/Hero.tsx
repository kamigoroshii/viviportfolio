import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';
import { aboutMe } from '../data/resumeData';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-between pt-24 pb-16 relative bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-32 left-0 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 z-10 flex-1 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">{aboutMe.name}</span>
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            {aboutMe.description}
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            
            <div className="flex gap-4">
              
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-center pb-8"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="inline-flex flex-col items-center cursor-pointer text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
        >
          <span className="text-sm mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Scroll Down</span>
          <ChevronDown className="h-6 w-6 animate-bounce group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;