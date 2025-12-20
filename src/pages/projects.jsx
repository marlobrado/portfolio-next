import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import { userData } from '@/utils/userData';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';
import { motion } from 'framer-motion';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light ">
      <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link className="w-1/2 cursor-pointer overflow-hidden rounded-lg" href={link} target="_blank">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1 }}
          priority
          sizes="(max-width: 768px) 100,vw (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="relative group">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">{title}</h2>
          <span className="h-[4px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-[-0.1rem] group-hover:w-full transition-[width] ease duration-500 w-0"></span>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light transition-colors duration-300"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-2xl flex-col border border-solid border-dark dark:border-light dark:bg-dark bg-light p-6 relative shadow-2xl">
      <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />

      <Link className="w-full cursor-pointer overflow-hidden rounded-lg" href={link} target="_blank">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 1 }} />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="relative group">
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
          <span className="h-[4px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-[-0.1rem] group-hover:w-full transition-[width] ease duration-500 w-0"></span>
        </Link>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target="_blank" className=" text-lg font font-semibold underline">
            Visit
          </Link>
          <Link className="w-8" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Fernando Henrique | Projects Page</title>
        <meta name="description" content="All my projects and works by Fernando Henrique" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="w-full  mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className=" pt-16">
          <AnimatedText className="mb-16" text={userData.animatedTextProjects} />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                className="col-span-12"
                type={'Crypto Screener Application'}
                title={'Meu titulaço'}
                summary={'a feature=rich crypto screener app using React, tailwindcss, context api, react-router-dom an Recjarts.'}
                img={project1}
                link={'/'}
                github={'/'}
              />
            </div>

            <div className="col-span-6">
              <Project
                type={'Project Type'}
                title={'Project Title'}
                // summary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, modi.'}
                img={project1}
                link={'/'}
                github={'/'}
              />
            </div>
            <div className="col-span-6">
              <Project
                type={'Project Type'}
                title={'Project Title'}
                // summary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, modi.'}
                img={project1}
                link={'/'}
                github={'/'}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                className="col-span-12"
                type={'Crypto Screener Application'}
                title={'Meu titulaço'}
                summary={'a feature=rich crypto screener app using React, tailwindcss, context api, react-router-dom an Recjarts.'}
                img={project1}
                link={'/'}
                github={'/'}
              />
            </div>
            <div className="col-span-6">
              <Project
                type={'Project Type'}
                title={'Project Title'}
                // summary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, modi.'}
                img={project1}
                link={'/'}
                github={'/'}
              />
            </div>
            <div className="col-span-6">
              <Project
                type={'Project Type'}
                title={'Project Title'}
                // summary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, modi.'}
                img={project1}
                link={'/'}
                github={'/'}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
