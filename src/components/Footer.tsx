import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as any },
    },
  };

  return (
    <footer
      className="py-12 md:py-16"
      style={{ backgroundColor: '#232347' }}
    >
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Social Links */}
          <motion.div className="flex items-center gap-6" variants={itemVariants}>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#14D8C4',
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: '#14D8C4',
                color: '#232347',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
              </svg>
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#14D8C4',
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: '#14D8C4',
                color: '#232347',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </motion.a>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#14D8C4',
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: '#14D8C4',
                color: '#232347',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Center: Copyright */}
          <motion.p
            className="text-sm md:text-base"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            variants={itemVariants}
          >
            © 2026 Alex Morgan. All rights reserved.
          </motion.p>

          {/* Right: Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#14D8C4',
            }}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              backgroundColor: '#14D8C4',
              color: '#232347',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
}
