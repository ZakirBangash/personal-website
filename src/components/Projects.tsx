import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left mad:flex-row 
       justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-24">
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
            items-center justify-center p-20 md:p-44 h-screen
            "
          >
            <Image
              width={80}
              height={80}
              className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32
                filter group-hover:grayscale transition duration-300 ease-in-out
                "
              src={
                "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              }
              alt="Picture of the author"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span>Case Study</span> Nooberly
              </h4>
              <p className="text-lg text-center md:text-left">
                Nooberly is a revolutionary Kingdom of nieghbours designed to
                tackle all the world problems ie. Depression, Loneliness,
                Poverty, Crime, and much more. Whether you need to socialize,
                hire, trade , rend , or ride, you can do it all with your
                nieghbours on Nooberly.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
