import React from 'react';
import { motion } from 'framer-motion';

export default function SectionContainer({ children, id, className = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={`relative py-16 md:py-24 max-w-5xl mx-auto px-6 md:px-8 z-10 ${className}`}
    >
      {children}
    </motion.section>
  );
}
