'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';
import {
  MukulVijaySingh,
  RishabhGupta,
  SanjayGarg,
  SanjivGupta,
} from '@/assets';
import ContainerLayout from '../Layout/ContainerLayout';

const directors = [
  {
    image: SanjivGupta,
    name: 'Mr. Sanjiv Gupta',
    description: 'Managing Director',
  },
  { image: RishabhGupta, name: 'Mr. Rishabh Gupta', description: 'Director' },
  {
    image: SanjayGarg,
    name: 'Mr. Sanjay Garg',
    description: 'Director - Finance',
  },
  {
    image: MukulVijaySingh,
    name: 'Mr. Mukul Vijay Singh',
    description: 'Chief Executive Officer',
  },
];

const Directors = () => {
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true, margin: '-50px' });
  const isGridInView = useInView(gridRef, { once: true, margin: '-100px' });

  // Animation variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <ContainerLayout className="flex flex-col items-center justify-center text-center pt-20 pb-32">
      {/* === Title Section === */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-3xl px-4"
      >
        <h1 className="text-[#4A4A4A] font-semibold xl:text-[42px] lg:text-[36px] md:text-[28px] text-[20px] mb-3">
          Leadership That Powers Us
        </h1>
        <p className="text-[#4A4A4A] md:text-[16px] text-[13px] leading-relaxed">
          Our leadership combines decades of industry experience with a shared
          vision to transform the way India and emerging markets access clean,
          reliable power.
        </p>
      </motion.div>

      {/* === Directors Grid === */}
      <div ref={gridRef} className="mt-14 w-full px-6 md:px-10">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8 md:gap-10
            place-items-center
          "
        >
          {directors.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isGridInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="w-full max-w-[300px] text-left"
            >
              <div className="w-full aspect-3/4 overflow-hidden shadow-lg mb-3 rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                  {item.name}
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Directors;
