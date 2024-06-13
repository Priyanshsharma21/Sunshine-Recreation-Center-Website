import { useTransform, motion } from "framer-motion";
import { w6 } from "../assets";


const HomeEvents = ({scrollYProgress}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  return (
    <motion.div style={{scale, rotate}} className="relative h-screen">
        <img src={w6} alt="" className="w-full h-full object-cover" />
    </motion.div>
  )
}

export default HomeEvents