import { useRef } from "react";
import { w4, w6, w7 } from "../assets";
import { motion, useScroll, useTransform } from 'framer-motion';
import { SparklesText } from '../components/Backgrounds'


export default function ServiceIntroScroll() {
    const container = useRef(null);
 
    return (
        <div ref={container} className="service_intro_container overflow-hidden">
            <div className="service_intro_body">
                <motion.h1 className="service_heading flex justify-center" >
                    <SparklesText text="OUR SERVICE" />
                </motion.h1>
            </div>
            <div className="service_intro_images w-full flex justify-center">
                <div className="desktop_service_img">
                    <img src={"https://cdn.sanity.io/images/s9olv7lh/production/55869343f4cd1d649265bf06d7598850dfa5e9b7-2239x1391.png"} alt="desktop_service_img" />
                </div>
                <div className="mobile_service_img">
                    <img src={"https://cdn.sanity.io/images/s9olv7lh/production/04844b88ca1357444a6baff12aee1a57d9cf1b60-782x2571.png"} alt="mobile_service_img" />
                </div>
            </div>
        </div>
    )
}