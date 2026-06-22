import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const profileImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663029429997/cGLXMiQ6AvZBgN8HMBSubT/project-1-thumbnail-6wUxoPJhn72p8TizxUgeGS.webp';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as any },
    },
  };

  return (
    <section id="about" className="">
      {/* Diagonal Divider Top */}
      {/* <div className="absolute top-0 left-0 right-0 h-32 -mt-1" style={{ backgroundColor: '#14D8C4' }}>
        <svg
          className="absolute bottom-0 left-0 w-full h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ fill: '#FFFFFF' }}
        >
          <path d="M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z" />
        </svg>
      </div> */}

      <div
        className="relative z-10 pt-20 md:pt-32"
        style={{ backgroundColor: '#14D8C4' }}
      >
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image */}
            <motion.div
              className="flex justify-center"
              variants={itemVariants}
            >
              <img
                src={profileImageUrl}
                alt="Profile"
                className="w-full max-w-sm rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Right: About Text */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
                About Me
              </h2>

              <p
                className="text-lg mb-6 leading-relaxed"
                style={{ color: 'rgba(255, 255, 255, 0.95)' }}
              >
                I'm a passionate developer with a keen eye for design and a commitment to writing clean, maintainable code. With over 5 years of experience building web applications, I've worked with startups and enterprises to bring their ideas to life.
              </p>

              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                My expertise spans React, Node.js, TypeScript, and modern web technologies. I believe in creating experiences that are not just functional, but delightful to use.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL'].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>

              <motion.button
                className="px-8 py-4 border-2 font-semibold rounded text-lg transition-all duration-300 flex items-center gap-2 group"
                style={{
                  borderColor: '#FFFFFF',
                  color: '#FFFFFF',
                  backgroundColor: 'transparent',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#14D8C4';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                
                <Download className="w-5 h-5" />
                View Resume
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Diagonal Divider Bottom */}
        <div className="relative h-32 mt-20 md:mt-32">
          <svg
            className="absolute top-0 left-0 w-full h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ fill: '#FFFFFF' }}
          >
            <path d="M0,0 Q300,50 600,0 T1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
