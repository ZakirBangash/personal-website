import React from "react";
import Image from "next/image";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] 
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <Image
        className="rounded-full object-cover object-center"
        width={0}
        height={60}
        src={
          "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
        }
        alt="Picture of the author"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Full Stack Engineer</h4>
        <p className="font-bold text-2xl mt-1">Productbox</p>
        <div className="flex space-x-2 my-2"></div>
        <p className=" uppercase py-5 text-gray-500">August 2022 - Present</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            {" "}
            Full Stack Engineer at Productbox, specializing in React, React
            Native, Firebase cloud functions and Node.
          </li>
          <li>
            {" "}
            Utilizing tools and tech like Jira, Slack, Mux API, React Query, and
            Zustand to streamline development processes.
          </li>
          <li>
            {" "}
            Collaborating closely with cross-functional teams to deliver
            high-quality solutions.
          </li>
          <li>
            Committed to staying updated with industry best practices and
            driving efficiency in project execution.
          </li>
          <li>
            Contributing to Productbox ongoing success through my technical
            expertise and dedication to excellence.
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
