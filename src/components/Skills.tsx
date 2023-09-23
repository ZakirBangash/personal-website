import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen
  relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen
  justify-center xl:space-y-0 mx-auto items-center
  "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency{" "}
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill
          url={
            "https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-256.png"
          }
          proficiency={"70%"}
        />
        <Skill
          url={
            "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png"
          }
          proficiency={"80%"}
        />
        <Skill
          url={
            "https://cdn4.iconfinder.com/data/icons/tabler-vol-2/24/brand-react-native-128.png"
          }
          proficiency={"70%"}
        />
        <Skill
          url={
            "https://cdn4.iconfinder.com/data/icons/logos-3/455/nodejs-new-black-256.png"
          }
          proficiency={"50%"}
        />
        <Skill
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-xDqpWOheeDJM3u127DLCU4e7L-WTGs4GRZVTDxTmw&s"
          }
          proficiency={"50%"}
        />
        <Skill
          url={
            "https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-256.png"
          }
          proficiency={"50%"}
        />
        <Skill
          url={
            "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-256.png"
          }
          proficiency={"50%"}
        />
        <Skill
          url={
            "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/vue-dot-js-256.png"
          }
          proficiency={"50%"}
        />
        <Skill
          url={
            "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-128.png"
          }
          proficiency={"50%"}
        />
      </div>
    </motion.div>
  );
}

export default Skills;
