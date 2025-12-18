import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import { userData } from '@/utils/userData';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl">
      <Link className='w-1/2 cursor-pointer overflow-auto rounded-xl' href={link} target="_blank">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank" className='relative group'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
          <span className='h-[4px] inline-block bg-dark absolute left-0 -bottom-[-0.5rem] group-hover:w-full transition-[width] ease duration-500 w-0'></span>
        </Link>
        <p className='my-2 font-medium text-dark'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link className='w-10' href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'>
            Visit Project
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
      <main className="w-full  mb-16 flex flex-col items-center justify-center">
        <Layout className=" pt-16">
          <AnimatedText className="mb-16" text={userData.animatedTextProjects}  />
          <div className="grid grid-cols-12 gap-24">
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

            <div className="col-span-6">project 1</div>
            <div className="col-span-6">project 2</div>
            <div className="col-span-12">Featured Projects</div>
            <div className="col-span-6">project 3</div>
            <div className="col-span-6">project 4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
