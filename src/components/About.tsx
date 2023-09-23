import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative  
     xl:space-y-0  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="relative md:w-64 md:h-64 -mb-24 mt-6 md:mb-0 flex-shrink-0 w-56 h-56 xl:w-[400px] xl:h-[400px]">
        <Image
          src={"https://avatars.githubusercontent.com/u/66157395?v=4"}
          alt=""
          fill
          className="rounded-lg"
        />
      </div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">Little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          As a Full Stack Engineer, I have honed my skills in React Native and
          MERN. Additionally, I have experience with Vue.js, and Nuxt.js and I
          am currently focused on learning Next.js Typescript, and GraphQL. My
          passion for software development began during my apprenticeship with
          Grey Software, an open-source organization where I contributed to real
          projects and gained valuable experience in version control,
          collaborative reviews, and pair programming. This apprenticeship gave
          me a new level of confidence in solving coding problems, and I
          continue to value the importance of professionalism and high-quality
          code. Currently, I work as a Full Stack Engineer at ProductBox, where
          I remain committed to learning and improving my skills. I am excited
          to collaborate with a team of professionals and benefit from their
          expertise. Throughout my career, I have gained a strong understanding
          of the importance of teamwork, communication, and problem-solving, and
          I am dedicated to delivering innovative and scalable solutions that
          drive business growth. I am open to new opportunities and look forward
          to contributing my skills and experience to future projects
        </p>
      </div>
    </motion.div>
  );
};

export default About;
