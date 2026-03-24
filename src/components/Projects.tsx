import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TextReveal } from './ui/TextReveal';

interface Project {
  title: string;
  category: string;
  year: string;
  color: string;
  textColor: string;
  image: string;
  logo?: string;
  url?: string;
  description?: string;
}

const projects: Project[] = [
  {
    title: 'TransBridge USA',
    category: 'FinTech Advisory',
    year: '2025',
    color: '#2AB8A5',
    textColor: '#0A0A0A',
    image: '',
    logo: 'https://cdn.prod.website-files.com/682759b0ea83109842c09b13/6827633e30236c1adb40f349_Group%201.svg',
    url: 'https://www.transbridgeusa.com',
    description: 'MSB licensing, banking access & compliance infrastructure for fintechs entering the U.S. market.'
  },
];

interface CardProps {
  i: number;
  title: string;
  category: string;
  year: string;
  color: string;
  textColor: string;
  image: string;
  logo?: string;
  url?: string;
  description?: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ i, title, category, year, color, textColor, image, logo, url, description, progress, range, targetScale }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0 px-6">
      <motion.div 
        style={{ backgroundColor: color, color: textColor, scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="relative flex flex-col justify-between w-full max-w-[1400px] h-[70vh] rounded-3xl p-8 lg:p-12 origin-top overflow-hidden shadow-2xl"
      >
        <div className="flex justify-between items-start z-10 relative">
          {logo ? (
            <img
              src={logo}
              alt={title}
              className="w-56 lg:w-72 brightness-0"
              referrerPolicy="no-referrer"
            />
          ) : (
            <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase max-w-2xl mix-blend-difference text-white">
              {title}
            </h3>
          )}
          <div
            className="text-right font-mono text-sm uppercase tracking-widest opacity-60"
            style={{ color: textColor }}
          >
            <p>{category}</p>
            <p className="opacity-50">{year}</p>
          </div>
        </div>
        {(description || url) && (
          <div className="z-10 relative flex items-end justify-between gap-6">
            {description && (
              <p
                className="font-mono text-sm max-w-md leading-relaxed opacity-60"
                style={{ color: textColor }}
              >
                {description}
              </p>
            )}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-colors"
                style={{
                  color: textColor,
                  border: `1px solid ${textColor}40`,
                }}
              >
                Visit Site ↗
              </a>
            )}
          </div>
        )}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {!logo && (
            <motion.img
              style={{ scale: imageScale }}
              src={image}
              alt={title}
              className="w-full h-full object-cover opacity-40 grayscale mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" ref={containerRef} className="relative bg-[#F4F4F0] pt-24 lg:pt-32 pb-[10vh]">
      <div className="max-w-[1400px] mx-auto w-full mb-12 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <TextReveal className="font-mono text-sm uppercase tracking-widest text-gray-500">
              [ 03 ] Selected Work
            </TextReveal>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
              <TextReveal>Featured</TextReveal>
              <TextReveal delay={0.1}>Projects.</TextReveal>
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-20">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <Card
              key={i}
              i={i}
              title={project.title}
              category={project.category}
              year={project.year}
              color={project.color}
              textColor={project.textColor}
              image={project.image}
              logo={project.logo}
              url={project.url}
              description={project.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};
