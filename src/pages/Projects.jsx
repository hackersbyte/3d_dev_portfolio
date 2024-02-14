import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { motion } from "framer-motion";
import { fadeInn, textVariants, zoomIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Projects = () => {
  return (
    <>
      <motion.div 
      variants={textVariants()}
      >
      <h1 className="head-text">
        My{" "}
  
        <span className="blue-gradient_text font-semibold drop-shadow">
        Projects
      </span>
      </h1>
      </motion.div>

      <motion.p variants={fadeInn("", "", 0.1, 1)} className="text-slate-500 mt-2 leading-relaxed" >
        I've embarked on numerous projects throughout the development career, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </motion.p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <motion.div variants={zoomIn(0.2, 0.75)} className='lg:w-[300px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold" >
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500" >
                {project.description}
              </p>
              <div className="mt-5 flex  gap-12" >
                <div className="flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img 
                  src={arrow}
                  alt='arrow'
                  className="w-4 h-5 object-contain"
                />
                </div>
                <div className="flex items-center gap-2 font-poppins">
                <Link
                  to={project.Githublink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-semibold text-blue-600"
                >
                  Sorce Code
                </Link>
                <img 
                  src={arrow}
                  alt='arrow'
                  className="w-4 h-5 object-contain"
                />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <hr className="border-slate-200" />

      < CTA/>
    </>
  )
}

export default SectionWrapper(Projects, "projects");