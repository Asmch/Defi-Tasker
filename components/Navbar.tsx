"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Database, Layers, Zap } from 'lucide-react';

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
      
      <nav className="hidden md:flex items-center space-x-8">
        {[
          { name: 'Home', id: 'hero' },
          { name: 'Services', id: 'parallax' },
          { name: 'About Us', id: 'pricing' },
        ].map((item) => (
          <motion.a
            key={item.id}
            className="navbar-link text-gray-200 hover:text-purple-400 transition-colors cursor-pointer"
            onClick={() => scrollToSection(item.id)}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {item.name}
          </motion.a>
        ))}
      </nav>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          className="purple-gradient text-white font-medium rounded-full px-6 py-2"
        >
          Join Us
        </Button>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;