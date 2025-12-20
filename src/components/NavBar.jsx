import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { GithubIcon, InstaIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon, WhatsappIcon } from './Icons';
import { motion } from 'framer-motion';
import { userData } from '@/utils/userData';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();
  const routerPath = router.asPath;
  // console.log(routerPath);

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-500 dark:bg-light ${
          routerPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative">
      {/* botao hamburguer */}
      <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
        {/* Linha Superior */}
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>

        {/* Linha do Meio (Com margem my-0.5 para espaçar) */}
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        ></span>

        {/* Linha Inferior */}
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        {/* desktop view */}
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
            target={'_blank'}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 mx-3 ${userData.linkedinUser == '' ? 'hidden' : ''}`}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href={`https://github.com/${userData.gitHubUsername}`}
            target={'_blank'}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 mx-3 ${userData.gitHubUsername == '' ? 'hidden' : ''}`}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href={`https://twitter.com/${userData.twitterUser}`}
            target={'_blank'}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 mx-3 ${userData.twitterUser == '' ? 'hidden' : ''}`}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href={`https://www.instagram.com/${userData.instagramUser}`}
            target={'_blank'}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 mx-3 ${userData.instagramUser == '' ? 'hidden' : ''}`}
          >
            <InstaIcon />
          </motion.a>
          <motion.a
            href={`https://wa.me/${userData.whatsappNumber}`}
            target={'_blank'}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 mx-3 ${userData.whatsappNumber == '' ? 'hidden' : ''}`}
          >
            <WhatsappIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
          >
            {mode === 'dark' ? <SunIcon className={'fill-dark'} /> : <MoonIcon className={'fill-dark'} />}
          </button>
        </nav>
      </div>

      <div className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* mobile view */}
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
            target={'_blank'}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 mx-3 ${userData.linkedinUser == '' ? 'hidden' : ''}`}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href={`https://github.com/${userData.gitHubUsername}`}
            target={'_blank'}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 mx-3 ${userData.gitHubUsername == '' ? 'hidden' : ''}`}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href={`https://twitter.com/${userData.twitterUser}`}
            target={'_blank'}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 mx-3 ${userData.twitterUser == '' ? 'hidden' : ''}`}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href={`https://www.instagram.com/${userData.instagramUser}`}
            target={'_blank'}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 mx-3 ${userData.instagramUser == '' ? 'hidden' : ''}`}
          >
            <InstaIcon />
          </motion.a>
          <motion.a
            href={`https://wa.me/${userData.whatsappNumber}`}
            target={'_blank'}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.9 }}
            className={`w-6 mx-3 ${userData.whatsappNumber == '' ? 'hidden' : ''}`}
          >
            <WhatsappIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
          >
            {mode === 'dark' ? <SunIcon className={'fill-dark'} /> : <MoonIcon className={'fill-dark'} />}
          </button>
        </nav>
      </div>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
