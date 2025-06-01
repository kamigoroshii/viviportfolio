import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white relative inline-block">
            About Me
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-indigo-600 dark:bg-indigo-500"></span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
           I'm a second-year B.Tech student at VNR VJIET, specializing in Computer Science and Engineering with a focus on Artificial Intelligence and Machine Learning. I'm currently diving deep into Data Structures and Algorithms while also exploring frontend development. Most days, you'll find me glued to my laptop — planning to build something new, only to be greeted by a few unexpected errors. But every bug is a learning curve, and I'm committed to growing through it all. With a strong interest in programming, intelligent systems, and software development, I'm passionate about building meaningful tech solutions and constantly improving both my technical and problem-solving skills.
         </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;