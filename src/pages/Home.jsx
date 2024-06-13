import React, { useRef } from 'react'
import { GradualSpacing, Hero, HomeEvents, HomeGallery, HomeService, Testimonials } from '../components'
import { useScroll } from 'framer-motion';

const Home = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  }) 

  return (
    <div className="w-full">
        <Hero />
        <div className="show_ticker_home">
              <div className="group bg-[#67B547] flex h-full cursor-pointer items-center whitespace-nowrap">
                <span className=" group-hover:pause animate-loopL text-[#165427] font-semibold uppercase">
                Our Participants will be awarded certificates by Dr. Kiran Bedi ---&nbsp;
                </span>
                <span className="group-hover:pause animate-loopL text-[#165427] font-semibold uppercase">
                Our Participants will be awarded certificates by Dr. Kiran Bedi ---&nbsp;
                </span>
                <span className="group-hover:pause animate-loopL text-[#165427] font-semibold uppercase">
                Our Participants will be awarded certificates by Dr. Kiran Bedi ---&nbsp;
                </span>
              </div>
        </div>
        <HomeGallery />
        <main ref={container} className="relative h-[200vh] bg-[#ff9f0f78]">
          <HomeService scrollYProgress={scrollYProgress}/>
          <HomeEvents scrollYProgress={scrollYProgress}/>
        </main>
        <main className="w-full h-screen commonbg">
          <div className="testimonials_heading absolute w-full flex justify-center mt-10">
            <GradualSpacing
              className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
              text="Testimonials"
            />
          </div>
          <Testimonials />
        </main>
    </div>
  )
}

export default Home