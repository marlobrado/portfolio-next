import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1, // Começa visível
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5, // Espera 0.5s antes de começar
      staggerChildren: 0.3, // IMPORTANTE: Anima cada palavra com 0.3s de diferença
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0, // Invisível
    y: 50, // 50px abaixo da posição final
  },
  animate: {
    opacity: 1, // Fica visível
    y: 0, // Sobe para posição normal
    transition: {
      duration: 1, // Leva 1 segundo para completar
    },
  },
};

const AnimatedText = ({ text, className }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            variants={singleWord}
            // initial='initial'
            // animate='animate'
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
