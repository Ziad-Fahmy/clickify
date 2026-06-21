import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const heroBackgroundUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663029429997/cGLXMiQ6AvZBgN8HMBSubT/hero-background-jxeuPJYvRYWudwagemq4MB.webp';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as any },
    },
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-start overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${heroBackgroundUrl}')`,
          zIndex: 0,
        }}
      />

      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          <motion.p
            className="text-sm md:text-base font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#14D8C4' }}
            variants={itemVariants}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ color: '#232347' }}
            variants={itemVariants}
          >
            Hi, it's{' '}
            <span style={{ color: '#14D8C4' }}>Clckify</span>
          </motion.h1>

          <motion.p
            className="text-3xl md:text-5xl font-bold mb-8"
            style={{ color: '#232347' }}
            variants={itemVariants}
          >
            Software Company
          </motion.p>

          <motion.p
            className="text-lg md:text-xl mb-8 max-w-xl leading-relaxed"
            style={{ color: '#666666' }}
            variants={itemVariants}
          >
            Crafting digital experiences that matter. I specialize in building modern web applications with clean code and thoughtful design.
          </motion.p>

          <motion.button
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 border-2 font-semibold rounded text-lg transition-all duration-300 flex items-center gap-2 group"
            style={{
              borderColor: '#14D8C4',
              color: '#14D8C4',
              backgroundColor: 'transparent',
            }}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#14D8C4';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#14D8C4';
            }}
          >
            Know More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div
          className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
          style={{ borderColor: '#14D8C4' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ backgroundColor: '#14D8C4' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
