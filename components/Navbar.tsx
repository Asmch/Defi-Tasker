"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Layers } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const navbarHeight = useTransform(scrollY, [0, 100], ['5rem', '4rem']);
  const navbarBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(10, 10, 20, 0.95)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex items-center justify-between"
      style={{
        height: navbarHeight,
        backgroundColor: navbarBackground,
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Layers className="h-8 w-8 text-purple-500 mr-2" />
        <span className="text-xl md:text-2xl font-bold gradient-text">DeFi-Tasker</span>
      </motion.div>

      <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
        {[
          { name: 'Home', id: 'hero' },
          { name: 'Services', id: 'parallax' },
          { name: 'Plans', id: 'pricing' },
        ].map((item) => (
          <motion.a
            key={item.id}
            className="relative text-gray-200 hover:text-white transition-colors cursor-pointer px-3 py-2"
            onClick={() => scrollToSection(item.id)}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {item.name}
            <span className="absolute inset-0 border border-purple-500 opacity-0 hover:opacity-100 bg-black/40 transition-all duration-300"></span>
          </motion.a>
        ))}
      </nav>


      <div className="flex space-x-4">
        <motion.button
          className="px-6 py-2 border-2 border-purple-500 text-white rounded-full transition-all relative overflow-hidden bg-purple-700 hover:bg-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 text-white hover:text-purple-500 transition-colors duration-300">
            Join as Worker
          </span>
        </motion.button>
        <motion.button
          className="px-6 py-2 border-2 border-purple-500 text-white rounded-full transition-all relative overflow-hidden bg-purple-700 hover:bg-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 text-white hover:text-purple-500 transition-colors duration-300">
            Join as User
          </span>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Navbar;
