import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  sourceUrl: string;
  isReversed?: boolean;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  liveUrl,
  sourceUrl,
  isReversed = false,
  index = 0,
}: ProjectCardProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as any },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: isReversed ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1] as any,
      },
    },
  };

  return (
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-center mb-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Text Content */}
      <motion.div
        className={`${isReversed ? 'md:order-2' : ''}`}
        variants={itemVariants}
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#232347' }}>
          {title}
        </h3>

        <p className="text-lg mb-6 leading-relaxed" style={{ color: '#666666' }}>
          {description}
        </p>

        <div className="flex flex-wrap gap-4">
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 font-semibold rounded transition-all duration-300 flex items-center gap-2 group inline-block"
            style={{
              borderColor: '#14D8C4',
              color: '#14D8C4',
              backgroundColor: 'transparent',
            }}
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
            <ExternalLink className="w-4 h-4" />
            See Live
          </motion.a>

          <motion.a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 font-semibold rounded transition-all duration-300 flex items-center gap-2 group inline-block"
            style={{
              borderColor: '#14D8C4',
              color: '#14D8C4',
              backgroundColor: 'transparent',
            }}
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
            <Github className="w-4 h-4" />
            Source Code
          </motion.a>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className={`${isReversed ? 'md:order-1' : ''}`}
        variants={itemVariants}
      >
        <img
          src={image}
          alt={title}
          className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
        />
      </motion.div>
    </motion.div>
  );
}
