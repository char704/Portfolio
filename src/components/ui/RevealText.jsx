import { motion } from 'framer-motion';

export default function RevealText({ children, className = '' }) {
  return (
    <motion.p
      className={className}
      initial={{ y: 18, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.p>
  );
}
