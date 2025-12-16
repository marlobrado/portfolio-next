import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { GithubIcon, InstaIcon, LinkedInIcon, TwitterIcon, WhatsappIcon } from './Icons';
import { motion } from 'framer-motion';
import { userData } from '@/utils/userData';

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();
  const routerPath = router.asPath;
  // console.log(routerPath);

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-500 ${
          routerPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
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
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
