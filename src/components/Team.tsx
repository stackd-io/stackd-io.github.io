import React from 'react';
import { motion } from 'motion/react';
import { TextReveal } from './ui/TextReveal';

const team = [
  {
    name: 'Glendell Bringino',
    role: 'Full Stack Developer',
    image: '/images/glendell.jpg',
    website: 'https://glendell03.github.io/',
  },
  {
    name: 'Gary Lloyd Senoc',
    role: 'Full Stack Dev',
    image: '/images/gary.webp',
  },
  {
    name: 'Jordan Lee',
    role: 'Full Stack Dev',
    image: 'https://picsum.photos/seed/jordan/800/800?blur=1'
  },
  {
    name: 'Josephus Mabanag',
    role: 'QA Engineer',
    image: '/images/josephus.webp',
    objectPosition: 'left'
  }
];

export const Team = () => {
  return (
    <section id="team" className="py-24 lg:py-32 px-6 border-b border-grid bg-[#0A0A0A] text-[#F4F4F0]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <TextReveal className="font-mono text-sm uppercase tracking-widest text-[#FF3300]">
              [ 04 ] The Team
            </TextReveal>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase leading-[0.9]">
              <TextReveal>Meet the</TextReveal>
              <TextReveal delay={0.1}>Makers.</TextReveal>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F4F4F0]/20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0A0A0A] group relative overflow-hidden aspect-[3/4] cursor-crosshair"
            >
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                style={'objectPosition' in member ? { objectPosition: member.objectPosition } : undefined}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 p-8 w-full bg-[#0A0A0A] border-t border-[#FF3300]/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold tracking-tight uppercase mb-1">{member.name}</h3>
                <p className="font-mono text-xs uppercase tracking-widest text-[#FF3300]">{member.role}</p>
                {'website' in member && (
                  <a
                    href={member.website as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-widest text-[#F4F4F0]/50 hover:text-[#F4F4F0] transition-colors mt-2 inline-block"
                  >
                    Visit Site →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
