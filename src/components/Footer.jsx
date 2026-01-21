import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light dark:text-light font-medium text-lg sm:">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center lg:py-2">
          Build With <span className=" text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span> by&nbsp;
          <Link href="https://www.linkedin.com/in/fernando-henrique-sousa-teixeira/" className="underline underline-offset-2" target="_blank">
            Fernando Henrique
          </Link>
        </div>
        <Link href="mailto:fernandogynbsb@gmail.com" className="underline underline-offset-2" target="_blank">
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
