import { userData } from '@/utils/userData';
import React, { use } from 'react';

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary capitalize">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl w-full text-center">Experience</h2>
      <div className="w-[75%] mx-auto relative">
        <ul>
          {userData.experience.map((exp, index) => (
            <Details
              key={index}
              position={exp.position}
              company={exp.company}
              companyLink={exp.companyLink}
              time={exp.time}
              address={exp.address}
              work={exp.work}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
