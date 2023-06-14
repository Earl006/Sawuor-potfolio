import React, { useState } from 'react';

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useState(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-4 px-8">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Sharon Awuor</p>
        <nav>
          <a
            href="#about"
            className="text-white hover:text-gray-400 transition duration-300 ease-in-out ml-4"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="text-white hover:text-gray-400 transition duration-300 ease-in-out ml-4"
          >
            Skills
          </a>
          <a
            href="#certifications"
            className="text-white hover:text-gray-400 transition duration-300 ease-in-out ml-4"
          >
            Certifications
          </a>
        </nav>
        {showBackToTop && (
          <a
            href="#top"
            className="text-white hover:text-gray-400 transition duration-300 ease-in-out ml-4"
            onClick={handleBackToTop}
          >
            Back to Top
          </a>
        )}
      </div>
    </footer>
  );
}

export default Footer;
