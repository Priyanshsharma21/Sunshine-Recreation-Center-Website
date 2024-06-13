import Text3d from './Text3d.jsx';
import { useRef } from 'react';


const ServiceMoto = () => {
    const plane = useRef(null);
    const maxRotate = 45;
  
    const manageMouseMove = (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      const perspective = window.innerWidth * 4;
      const rotateX = maxRotate * x - maxRotate / 2; 
      const rotateY = (maxRotate * y - maxRotate / 2) * - 1;
      plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
    }

  return (
    <div>
        <div onMouseMove={(e) => {manageMouseMove(e)}} className="s5Container">
            <div ref={plane} className="s5body">
                <Text3d primary={"WHEN I SLEEP AND DREAM ..."} secondary={"LIFE IS A JOY"}/>
                <Text3d primary={"WHEN I'M AWAKE AND SEE ..."} secondary={"LIFE IS A SERVICE"}/>
                <Text3d primary={"WHEN I ACT AND PERFORM ..."} secondary={"SERVICE IS JOY"}/>
            </div>
        </div>
    </div>
  )
}

export default ServiceMoto