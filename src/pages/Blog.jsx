import React, {useState, useEffect} from 'react';
import {motion } from  "framer-motion";
import { CTA } from "../components";
import { SectionWrapper, } from "../hoc";
import { fadeInn, textVariants, slideIn} from "../utils/motion";

import { urlFor, client } from './../client';
import './Blog.scss';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filterBlog, setFilterBlog] = useState([]);
  const [activeFilter, setActiveFilter] =  useState('All');
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1 })

  useEffect(() => {
    const query = '*[_type ==  "blogs"]';

    client.fetch(query).then((data) => {
      setBlogs(data);
      setFilterBlog(data);
    });
  }, []);

  const handleBlogFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y:0,  opacity: 1}]);

      if ( item === 'All') {
        window.open('https://codedalex.com', '_blank');
      } else {
        setFilterBlog(blogs.filter((blog) => blog.tags.includes(item)));
      }
    },500);
  };


  return (
    < >
      <motion.h2 className='head-text'
        variants={textVariants()}> 
        Our Most <span  className="blue-gradient_text font-semibold drop-shadow">Popular Blogs</span> Section </motion.h2>

      <motion.div className='app__blog-filter'
        variants={fadeInn("right", "spring", 0.5, 0.75)}>
        {['Coding', 'Python', 'Javascript', 'React JS', 'Tech News', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() =>handleBlogFilter(item)}
            className={`app__blog-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}

      </motion.div>
      
      <motion.div 
      variants={slideIn("right", "spring", 0.5, 0.75)}
       className="app__blog-portfolio"
      >
        { filterBlog.map((blog, index) => (
          <div className='app__blog-item app__flex cursor-pointer' 
          key={index}
          onClick={() => window.open(blog.projectLink, '_blank')}
          >
            <div
              className='app__blog-img app__flex'
            >
              <img src={urlFor(blog.imgUrl)} alt={blog.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25,  ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__blog-hover app__flex'
              >
              
                <a href={blog.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 2]}}
                    whileHover={{ scale: [1, 0.90]}}
                    transition={{ duration: 0.25}}
                    className='app__flex'
                    >
                      <p className="read-more-text">Read More</p>
                      {/* <AiFillEye />  */}
                  </motion.div>
                </a>

              </motion.div>
            </div>

            <div className='app__blog-content app__flex'>
              <h4 className='bold-text'> {blog.title} </h4>
              <p className="p-text" style={{ marginTop: 10 }}>{blog.description}</p>

              <div  className='app__blog-tag app__flex'>
                <p className='p-text' >{blog.tags[0]}</p>
              </div>

            </div>

          </div>
        ))}

      </motion.div>

      <hr className="border-slate-500" />

      <CTA/>

      </>
  );
};

export default SectionWrapper (Blog, "blog");


