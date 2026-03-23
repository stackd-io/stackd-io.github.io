import React from 'react';
import { motion } from 'motion/react';
import { TextReveal } from './ui/TextReveal';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-12 border-b border-grid relative">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-[12vw] lg:text-[10vw] leading-[0.85] font-bold tracking-tighter uppercase">
              <TextReveal>We Build</TextReveal>
              <TextReveal delay={0.1}>Digital</TextReveal>
              <TextReveal delay={0.2}>
                <span className="text-[#FF3300]">Futures.</span>
              </TextReveal>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-4 lg:pb-8 flex flex-col gap-8">
            <TextReveal delay={0.4} className="font-mono text-sm uppercase tracking-widest text-gray-500">
              [ 01 ] Introduction
            </TextReveal>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg lg:text-xl leading-relaxed font-medium max-w-md"
            >
              Anyone can ship code. We ship products that work.<br /><br />A focused team of full-stack developers and a QA engineer — we own the entire journey, from architecture to deployment. High-performance web apps, automations, and Web3 solutions, built to last.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#0A0A0A] text-[#F4F4F0] font-mono text-sm uppercase tracking-widest hover:bg-[#FF3300] transition-colors duration-300">
                Start a Project
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full border-t border-grid py-4 overflow-hidden bg-[#0A0A0A] text-[#F4F4F0]">
        <div className="marquee-container">
          <div className="marquee-content font-mono text-xs uppercase tracking-widest">
            <span className="mx-8">• Static Websites</span>
            <span className="mx-8">• Web Applications</span>
            <span className="mx-8">• Mobile App Development</span>
            <span className="mx-8">• Automations</span>
            <span className="mx-8">• AI Integration</span>
            <span className="mx-8">• Crypto</span>
            <span className="mx-8">• Blockchain</span>
            <span className="mx-8">• Web3</span>
            {/* Duplicate for seamless loop */}
            <span className="mx-8">• Static Websites</span>
            <span className="mx-8">• Web Applications</span>
            <span className="mx-8">• Mobile App Development</span>
            <span className="mx-8">• Automations</span>
            <span className="mx-8">• AI Integration</span>
            <span className="mx-8">• Crypto</span>
            <span className="mx-8">• Blockchain</span>
            <span className="mx-8">• Web3</span>
          </div>
        </div>
      </div>
    </section>
  );
};
