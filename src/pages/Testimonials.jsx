import React from 'react'
import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt'
import { CTA } from "../components";
import { testimonials } from '../constants';
import { styles } from "../styles";
import { fadeInn, textVariants } from "../utils/motion";

import "react-vertical-timeline-component/style.min.css";

const TestimonialCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
} ) => {
  return (

    <motion.div
      variants={fadeInn("", "spring", index * 0.5, 0.75)}
    >

    <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-white p-10 rounded-3xl xs:w-[320px] w-full'
      >

        <div className='mt-1'>
            <p className='text-slate-500 tracking-wider text-[18px]' > {testimonial} </p>
            <div className='mt-7 justify-between items-center gap-1' >
                <div className='flex-1 flex flex-col' >
                    <p className='mt-1 subhead-text text-[12px]'>
                        <span className='blue-text-gradient' >@</span> {name}
                    </p>
                    <p className='text-slate-500 font-medium text-[16px]' >
                        {designation} of {company}
                    </p>
                </div>

                <img 
                    src={image}
                    alt={ `testimonial_by-&{name}`}
                    className='w-10 h-10 rounded-full object-cover'
                />
            </div>
        </div>
    </Tilt>

    </motion.div>

    )};

const Testimonials = () => {
  return (
    <>
    
    <div
      className={`mt-12 bg-blue-100 rounded-[20px]`}
    >
      <div 
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >

        <motion.div variants={textVariants()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
    
    <hr className="border-slate-200" />
    
    <CTA />
    
    </>

  );
};


export default SectionWrapper(Testimonials, "");





