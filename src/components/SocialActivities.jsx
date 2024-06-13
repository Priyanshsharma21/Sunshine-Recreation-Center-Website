import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { motion, useTransform, useScroll } from "framer-motion";
import { sunshine_social_activities } from '../constant';
import { SparklesText } from './Backgrounds';

gsap.registerPlugin(ScrollTrigger)

const SocialActivities = () => {
    const processRef = useRef(null)
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div id="process" ref={processRef} className="w-full min-h-[100vh] service_2 text-white">
    <section ref={targetRef} className="relative h-[300vh] scrolling_box">
    <motion.h1 className="service_heading flex justify-center" style={{y: sm}}>
            <SparklesText text="SOCIAL ACTIVITIES" />
        </motion.h1>

      <div className="sticky top-0 flex h-screen items-center overflow-hidden processbg">
        <motion.div style={{ x }} className="flex gap-4">
          {sunshine_social_activities.map((card) => {
            return <Card card={card} key={card.key} />;
          })}
        </motion.div>
      </div>
    </section>
    </div>
  )
}

const Card = ({ card }) => {
  
  return (
    <div
      key={card.srno}
      className="group ml-[2rem] rounded-xl relative processCardMain overflow-hidden"
    >
      <div className="processCardImg flex justify-center w-full">
          <img src={card.img_url} alt={card.title} className="object-cover w-full h-full" />
      </div>

      <div className="processCardDetails mt-5">
        <div className="flex items-center">
          <div className="processSrno bg-black text-white flex justify-center items-center rounded-full">
            {card.serial_number}
          </div>
          <div className="processTitle">
            {card.title}
          </div>
        </div>
        <div className="processDescription font-medium">
          {card.description}
        </div>
      </div>
    </div>
  );
};

export default SocialActivities