import React from 'react';
import { motion } from 'framer-motion';

export const PageTransition = ({ children, locationKey }: { children: React.ReactNode; locationKey: string }) => {
  return (
    <motion.div
      key={locationKey}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
