import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Flowlytics Dashboard',
    description:
      'A comprehensive project management dashboard built with React and TypeScript. Features real-time analytics, team collaboration tools, and intuitive data visualization. Designed for teams to track projects and tasks efficiently.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663029429997/cGLXMiQ6AvZBgN8HMBSubT/project-1-thumbnail-6wUxoPJhn72p8TizxUgeGS.webp',
    liveUrl: 'https://example.com/flowlytics',
    sourceUrl: 'https://github.com/example/flowlytics',
  },
  {
    title: 'Archifolio Mobile App',
    description:
      'A beautiful portfolio showcase app for architects and designers. Built with React Native, it allows professionals to display their work, connect with clients, and track engagement analytics. Features smooth animations and responsive design.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663029429997/cGLXMiQ6AvZBgN8HMBSubT/project-2-thumbnail-ARBQpzQGzQshTbwXYFzzVd.webp',
    liveUrl: 'https://example.com/archifolio',
    sourceUrl: 'https://github.com/example/archifolio',
  },
  {
    title: 'Shopio E-Commerce Platform',
    description: 'A modern e-commerce platform with advanced product filtering, cart management, and secure checkout. Built with Next.js and Stripe integration. Features include real-time inventory updates and comprehensive admin dashboard.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663029429997/cGLXMiQ6AvZBgN8HMBSubT/project-3-thumbnail-GrEtwFrPXdaMHNVuZxuQ5z.webp',
    liveUrl: 'https://example.com/shopio',
    sourceUrl: 'https://github.com/example/shopio',
  },
];

export default function Projects() {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as any },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Title */}
        <motion.div className="text-center mb-16 md:mb-24" variants={titleVariants}>
          <div
            className="inline-block h-1 w-16 mb-6 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #14D8C4, #11CBB9)',
            }}
          />
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#232347' }}>
            PROJECTS
          </h2>
          <p className="text-xl" style={{ color: '#666666' }}>
            A selection of recent work showcasing my expertise in full-stack development
          </p>
        </motion.div>

        {/* Project Cards */}
        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              isReversed={index % 2 === 1}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
