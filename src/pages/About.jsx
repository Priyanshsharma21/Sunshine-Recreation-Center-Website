import React, { useEffect, useRef, useState } from 'react';
import { aboutSectionContent } from '../constant';
import { ImPointRight } from "react-icons/im";
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(ScrollToPlugin);

const About = () => {
  const refs = useRef(aboutSectionContent.map(() => []));
  const [pageNumber, setPageNumber] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    createAnimation(0);
  }, []);

  useEffect(() => {
    gsap.fromTo(".about_head_s1", {
      ease: "power1.inOut",
      opacity: 0,
      y: 20,
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.1
    });
  }, []);

  useEffect(() => {
    gsap.to(window, { duration: 1, scrollTo: `#about_item-${pageNumber}` });
    if(pageNumber === 4){
      navigate("/contact")
    }
  }, [pageNumber]);

  const createAnimation = (index) => {
    gsap.fromTo(refs.current[index], 
      { opacity: 0.1 }, 
      {
        opacity: 1,
        ease: "power1.out",
        stagger: 0.04, 
        onComplete: () => handleAnimationComplete(index)
      }
    );
  };

  const handleAnimationComplete = (index) => {
    if (index < aboutSectionContent.length - 1) {
      setPageNumber(index + 1);
      createAnimation(index + 1);
    }
  };

  const splitWords = (phrase, index) => {
    return phrase.split(" ").map((word, i) => (
      <p key={word + "_" + i} style={{ display: 'inline-block', marginRight: '7px' }}>
        {splitLetters(word, index)}
      </p>
    ));
  };

  const splitLetters = (word, index) => {
    return word.split("").map((letter, i) => (
      <span key={letter + "_" + i} ref={el => { 
        if (el) refs.current[index].push(el); 
      }} style={{ opacity: 0.3 }}>
        {letter}
      </span>
    ));
  };

  return (
    <div className='about_main_main min-h-[200vh] overflow-hidden'>
      <section className="section1_about">
        {aboutSectionContent.map((item, i) => (
          <div id={`about_item-${i}`} key={item.title} className='w-full h-screen flex flex-col items-center justify-center about_content'>
            <div className="about_head_s1 font-bold text-[#e0dbd1] flex justify-start">
              {item.title}
            </div>
           {item.descriptions && (
            <div className="s1_about_description">
              {splitWords(item.descriptions, i)}
            </div>
           )}
            {item.list && (
              <div className="list_about_items">
                {item.list.map((listItem, listIndex) => (
                  <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5 }}
                  key={listIndex} className="list flex items-center">
                    <div className="point">
                      <ImPointRight className='text-white about_bullet_point'/>
                    </div>
                    <div className="point ml-3">
                      {listItem}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
