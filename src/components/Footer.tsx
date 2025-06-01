import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-gray-400">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            Designed and developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;