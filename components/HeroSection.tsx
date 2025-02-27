"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="gradient-text">Empowering You</span> <br />
            in the Decentralized World
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Earn effortlessly with DeFi-Tasker. We empower workers by enhancing their efficiency and help users maximize their earnings with smart Web3 tools.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button className="purple-gradient text-white font-medium rounded-full px-8 py-6 text-lg flex items-center gap-2">
              Get Started <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:text-purple-300 rounded-full px-8 py-6 text-lg">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80" 
              alt="DeFi-Tasker Web3 Illustration" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl purple-glow"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;