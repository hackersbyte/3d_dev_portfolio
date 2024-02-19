import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import React from "react";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { CTA } from "../components"
import { motion } from "framer-motion";
import { fadeInn, textVariants, } from "../utils/motion";
  


const ExperienceCard = ({ singleExperience }) => {
  return (
    <VerticalTimelineElement
      key={singleExperience.company_name}
      date={singleExperience.date}
      iconStyle={{ background: singleExperience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={singleExperience.icon}
            alt={singleExperience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
      contentStyle={{
        borderBottom: "8px",
        borderStyle: "solid",
        borderBottomColor: singleExperience.iconBg,
        boxShadow: "none",
      }}
    >
      <div>
        <h3 className='text-black text-xl font-poppins font-semibold'>
          {singleExperience.title}
        </h3>
        <p className='text-black-500 font-medium text-base' style={{ margin: 0 }}>
          {singleExperience.company_name}
        </p>
      </div>

      <ul className='my-5 list-disc ml-5 space-y-2'>
        {singleExperience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-black-500/50 font-normal pl-1 text-sm'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


const Works = () => {
  return (
    <>
      <div className='py-16'>
        <motion.div variants={textVariants()}>
          <h3 className='head-text'>
            Work{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Experience.
            </span>
          </h3>
        </motion.div>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <motion.p variants={fadeInn("", "", 0.1, 1)}>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </motion.p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((singleExperience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                singleExperience={singleExperience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-500' />

      <CTA />
    </>
  );
};

export default SectionWrapper(Works, "works");




