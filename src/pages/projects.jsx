import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import { userData } from '@/utils/userData';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article>
      <Link href={link} target="_blank">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div>
        <span>{type}</span>
        <Link href={link} target="_blank">
        <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
        <div>
          <Link href={github} target="_blank"><GithubIcon/></Link>
          <Link href={link} target="_blank">Visit Project</Link>
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
          <AnimatedText text={userData.animatedTextProjects} className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">Featured Projects</div>
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
