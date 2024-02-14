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
  


  const ExperienceCard = ({ experience }) => { 

    return(
      <VerticalTimelineElement
        key={experience.company_name}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        }
        contentStyle={{
          borderBottom: "8px",
          borderStyle: "solid",
          borderBottomColor: experience.iconBg,
          boxShadow: "none",
        }}
      >
        <div>
          <h3 className='text-black text-xl font-poppins font-semibold'>
            {experience.title}
          </h3>
          <p
            className='text-black-500 font-medium text-base'
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>
  
        <ul className='my-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
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
  
   } ;


const Works = () => {
  // console.log("Works component rendering");
    return (
      <>
        <div className='py-16'>
        <motion.div 
          variants={textVariants()}
        >
          <h3 className='head-text'>Work{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            {" "}
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
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
              
            ))}
          </VerticalTimeline>
        </div>
        </div>

        <hr className="border-slate-200" />
    
    <CTA />

        </>
    );
};

export default SectionWrapper(Works, "works");




