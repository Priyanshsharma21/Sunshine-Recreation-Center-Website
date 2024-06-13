import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { animateTitle, animateImage, revealMenu } from "../utils/animations.js";
import { mountains, sun } from '../assets/index.js'
import { headingDynamicParts1, headingDynamicParts2} from '../constant/index.js'
import { useGSAP } from "@gsap/react";
import { BsArrowDown } from "react-icons/bs";


const Hero = () => {
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const heroRef = useRef(null);
  const circleRef = useRef(null)
  const timeline = useRef(gsap.timeline());

  useEffect(() => {
    const circle = circleRef.current;
    const range = 100; 

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const circleRect = circle.getBoundingClientRect();
      const circleX = circleRect.left + circleRect.width / 2;
      const circleY = circleRect.top + circleRect.height / 2;
      const dist = Math.hypot(clientX - circleX, clientY - circleY);

      if (dist < range) {
        gsap.to(circle, {
          x: clientX - circleX,
          y: clientY - circleY,
          duration: 0.5,
          ease: 'power1.out',
        });
      } else {
        gsap.to(circle, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power1.out',
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartIndex((prevIndex) => (prevIndex + 1) % headingDynamicParts1.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateTitle()).add(revealMenu(), 0).add(animateImage(), 0);
    }, heroRef);

    return () => context.revert();
  }, []);

  useGSAP(()=>{
    gsap.fromTo("#hero_mountain_id",
    {
      y: 250,
      rotation:0,
      borderRadius : "0%"
    }
    ,{
      y : 0,
      duration : 2,
      ease : 'power1.inOut',
    })

    gsap.fromTo("#hero_sun_id",
    {
      y: 750,
      rotation:0,
      borderRadius : "0%"
    }
    ,{
      y : 0,
      duration : 2,
      delay : 1,
      ease : 'power1.inOut',
    })
  },[])

  const getCircleText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="w-full text-white" style={{ transform: `rotate(${index * 15}deg)` }}>{char}</span>
    ));
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__title">
        <div data-hidden data-title-first className="flex flex-col items-center">
          <span>Empowering Youth with</span>
          <span className="dynamic_hero_index text-[#fff346]">{headingDynamicParts1[currentPartIndex]} and {headingDynamicParts2[currentPartIndex]}</span>
          <span>for a Brighter Tomorrow</span>
        </div>
      </div>

      <div className="hero__image w-full">
        <img
          src="https://cdn.sanity.io/images/s9olv7lh/production/62df237d14373e7629da7c66ac0cac83869bd8b4-1448x915.png"
          id="hero_mountain_id"
          alt="Blob"
          className="mountain_img"
        />

        <div ref={circleRef} className="scroll_down w-full flex justify-center items-center absolute top-[70%]">
          <BsArrowDown className='text-white text-[2vw] font-light absolute' />
          <div className="circleQuote">
            {getCircleText("ENIHSNUS DNUORGYALP ROF ALL")}
          </div>
        </div>

      </div>
      <div className="sun">
          <img
            src="https://cdn.sanity.io/images/s9olv7lh/production/6745f68623d71e6e43d60597ad466760f8d199ac-359x321.png"
            id="hero_sun_id"
            alt="Blob"
            className="sun_img"
          />
        </div>
    </section>
  );
};

export default Hero;