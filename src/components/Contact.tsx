import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { contact } from '../data/resumeData';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white relative inline-block">
            Get In Touch
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-indigo-600 dark:bg-indigo-500"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-8">
            Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-1 mr-3" />
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email</h4>
                <a href={`mailto:${contact.email}`} className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {contact.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-1 mr-3" />
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone</h4>
                <a href={`tel:${contact.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {contact.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-1 mr-3" />
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {contact.location}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">Social Links</h4>
            <div className="flex space-x-4">
              <a 
                href={contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;