import { Tilt } from 'react-tilt'
import React from "react";
import { CTA } from "../components";
import { skills, services } from "../constants";
import { motion } from "framer-motion";
import { fadeInn, textVariants, } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {

  return (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeInn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
      </motion.div>
  </Tilt>
  );
};

const About = () => {
  return (
    <>

      <motion.div 
      variants={textVariants()}
      className='flex flex-col'
      >
        <h1 className="head-text flex-col">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            {" "}
            Alex
          </span>{" "}
          👋
        </h1>
      </motion.div>

      <motion.p
          variants={fadeInn("", "", 0.1, 1)}
          className='mt-4 text-slate-500 text-[18px] leading-[30px] flex flex-col'
        >
          Software Developer based in Kenya specializing in full-stack applications mainly using python and javascript. With expertise in frameworks like React, Node.js, Three.js, and Django. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>


      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA/>
    </>
  
  )
}

export default SectionWrapper(About, "about");




