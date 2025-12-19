import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';
import { userData } from '@/utils/userData';

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden ">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className={'fill-dark dark:fill-light animate-spin-slow'} />
        <Link
          href={`mailto:${userData.emailUser}`}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light dark:text-dark  text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark hover:border-dark transition-all duration-300 hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
        >
          Hire Me{' '}
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
