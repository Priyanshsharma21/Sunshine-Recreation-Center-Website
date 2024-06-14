import { ServiceIntroScroll, ServiceMoto, SocialActivities } from '../components';
import { serviceDetails } from '../constant';
import { motion, useScroll, useTransform} from 'framer-motion';
import { Row, Col } from 'antd';
import { SparklesText } from '../components/Backgrounds';
import { useRef } from 'react';

const Service = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
})

  return (
    <div className='w-full min-h-screen service'>
      <ServiceIntroScroll />
      <div className="service_cards_main">
        <Row gutter={[24,24]} className='flex justify-center'>
          {serviceDetails.map(item=>(
            <Col key={item.key} xl={8} lg={8} md={12} sm={24} xs={24}>
              <motion.div 
                className="service_card"
                whileInView={{y:[200,0], opacity:[0,1],filter: ["blur(10px)", "blur(0px)"]}}
              transition={{duration:0.5}} 
              >
                <img src={item.img_url} alt={item.title} className='w-full object-cover service_img' />
                <div className="description_of_service_card">
                  <div className="title_service_ca">
                    {item.title}
                  </div>
                  <div className="description_service">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
      
     
      {/* <section ref={container} className="section_2_service">
          <SocialActivities />
      </section> */}
     
    </div>
  );
};

export default Service;


