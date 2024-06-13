import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { useAnimeContext } from '../context/animeContext';
import { flowersBorder, w1,
  w2,
  w3,
  w4,
  w5,
  w6,
  w7,    flowersBorderLeft,
  flowersBorderRight,
  flowersBorderDown} from '../assets/index'
  import { useScroll, useTransform, motion} from 'framer-motion';

gsap.registerPlugin(ScrollTrigger)

const HomeGallery = () => {
  const aboutRef = useRef(null)
  const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const {setCurrentNav} = useAnimeContext()

  const pictures = [
    {
        src: w1,
        scale: scale4
    },
    // {
    //     src: w3,
    //     scale: scale5
    // },
    // {
    //     src: w2,
    //     scale: scale6
    // },
    // {
    //     src: w4,
    //     scale: scale5
    // },
    // {
    //     src: w5,
    //     scale: scale6
    // },
    // {
    //     src: w6,
    //     scale: scale8
    // },
    // {
    //     src: w7,
    //     scale: scale9
    // }
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
                                  <img
                                      src={src}
                                      alt="image"
                                      className='z-50'
                                  />
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