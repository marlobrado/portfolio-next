import { userData } from '@/utils/userData';
import { motion } from 'framer-motion';
import React from 'react';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light dark:text-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:dark:text-light xs:text-dark xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }} // Garantir que a animação ocorra apenas uma vez
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:!text-6xl md:mt-32">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold dark:bg-light dark:text-dark dark:shadow-light bg-dark text-light p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        {userData.skills.map((skill, index) => (
          <Skill key={index} name={skill.name} x={skill.x} y={skill.y} />
        ))}
      </div>
    </>
  );
};

export default Skills;
