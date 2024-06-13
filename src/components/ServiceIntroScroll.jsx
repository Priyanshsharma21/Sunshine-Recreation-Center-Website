import { useRef } from "react";
import { w4, w6, w7 } from "../assets";
import { motion, useScroll, useTransform } from 'framer-motion';
import { SparklesText } from '../components/Backgrounds'


export default function ServiceIntroScroll() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const images = [
        {
            src: "https://cdn.sanity.io/images/s9olv7lh/production/3f47ac4a43ee87c3488d22deaeb8d8fbc49734e4-899x1599.jpg",
            y: 0
        },
        {
            src: "https://cdn.sanity.io/images/s9olv7lh/production/d1819d29d44c09b0ef79ce36ecc30561068c5222-1280x904.png",
            y: lg
        },
        {
            src: "https://cdn.sanity.io/images/s9olv7lh/production/32be2247546ed26a00f12102616c3d9b7ee51053-736x663.png",
            y: md
        }
    ];

    return (
        <div ref={container} className="service_intro_container overflow-hidden">
            <div className="service_intro_body">
                <motion.h1 className="service_heading flex justify-center" style={{y: sm}}>
                    <SparklesText text="OUR SERVICE" />
                </motion.h1>
            </div>
            <div className="service_intro_images">
                {
                    images.map( ({src, y}, i) => {
                        return <motion.div style={{y}} key={`i_${i}`} className="service_intro_imageContainer">
                            <img 
                                src={src}
                                placeholder="blur"
                                alt="image"
                            />
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}