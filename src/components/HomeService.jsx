import { useTransform, motion } from "framer-motion";
import { useEffect } from "react";
import { our_service_fog, service_cloud } from "../assets";
import { gsap } from "gsap";
import { serviceNames } from "../constant";

const HomeService = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  useEffect(() => {
    serviceNames.forEach((service, i) => {
      gsap.fromTo(
        `.cloud-${i}`,
        {
          opacity: 0,
          y: i % 2 === 0 ? 100 : -100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5 + i * 0.5,
          delay: i * 0.3,
          ease: 'power1.inOut',
        }
      );
    });

  }, []);

  return (
    <motion.div style={{ scale, rotate }} className="sticky top-0 h-[100vh] homeServices">
      <img
        id="river_fog"
        src="https://cdn.sanity.io/images/s9olv7lh/production/bd74a64bcafb189ff3760ab8edae89829447d369-15722x4033.png"
        alt="flower_border"
        className="w-full relative z-20 our_Service_fog"
      />

      <div className="home_service_cards overflow-hidden flex flex-col justify-center z-50 absolute top-0 w-full">
        {serviceNames.map((service, i) => (
          <div
            key={i}
            className={`service_cloud relative flex justify-center items-center cloud-${i} ${i % 2 === 0 ? "left_cloud" : "right_cloud"}`}
          >
            <img src={service_cloud} alt="service cloud" className="service_cloud_img" />
            <div className="service_text absolute">{service}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HomeService;
