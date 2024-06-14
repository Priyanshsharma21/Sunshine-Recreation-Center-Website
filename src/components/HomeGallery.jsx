import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { flowersBorder, w1,
  flowersBorderLeft,
  flowersBorderRight } from '../assets/index'
  import { useScroll, useTransform, motion} from 'framer-motion';

gsap.registerPlugin(ScrollTrigger)

const HomeGallery = () => {
  const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);

  const pictures = [
    {
        src: "https://www.youtube.com/embed/Pd8igzf8Njs?si=MVBKYvyh577Qnred",
        scale: scale4
    },
]

  return (
    <div id="about" className="w-full min-h-[100vh] bg-[#489438] about_main text-white">
      <img src={flowersBorder} alt="flower_border" className="w-full"/>
      <img src={flowersBorderRight} alt="flower_border" className="absolute right-0"/>
      <img src={flowersBorderLeft} alt="flower_border" className="absolute left-0"/>
      <div ref={container} className="about_container">
              <div className="about_sticky">
                  {
                      pictures.map( ({src, scale}, index) => {
                          return <motion.div key={index} style={{scale}} className="about_el">
                              <div className="about_imageContainer">
                                <iframe className="youtube_video" width="100%" height="100%" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
                              </div>
                          </motion.div>
                      })
                  }
              </div>
          </div>
    </div>
  )
}

export default HomeGallery