import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { userData } from '@/utils/userData';
import Head from 'next/head';
import Image from 'next/image';
import React, { use, useEffect, useRef } from 'react';
import aboutImage from '../../../public/images/profile/eu_de_terno.png';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Fernando Henrique | About</title>
        <meta name="description" content="Created by Fernando" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text={userData.animatedTextAbout} className={'mb-16'} />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
              {userData.aboutParagraph.map((paragraph, index) => (
                <p key={index} className="mb-4 font-medium">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image src={aboutImage} alt="Fernando Henrique" className="w-full h-auto rounded-2xl" />
            </div>
            <div className={`col-span-2 flex flex-col items-end justify-between ${!userData.showSatisfactionClients && 'hidden'}`}>
              {userData.satisfactionClients.map((stat, index) => (
                <div key={index} className="flex flex-col items-end justify-center">
                  <span className="inline-block text-7xl font-bold">
                    <AnimatedNumber value={stat.count} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75">{stat.label[stat.count > 1 ? 1 : 0]}</h2>
                </div>
              ))}
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
