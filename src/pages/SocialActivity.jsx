import React from 'react'
import { SparklesText } from '../components/Backgrounds'
import { motion } from 'framer-motion'
import { ServiceMoto } from '../components'
import { Col, Row } from 'antd'
import { sunshine_social_activities } from '../constant'


const SocialActivity = () => {
  return (
    <div className='social_activity'>
        <section className="social_activity_main">
          <motion.h1 className="service_heading flex justify-center">
              <SparklesText text="SOCIAL ACTIVITIES" />
          </motion.h1>
        </section>

        <div className="service_cards_main2">
        <Row gutter={[24,24]} className='flex justify-center'>
          {sunshine_social_activities.map(item=>(
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
    </div>
  )
}

export default SocialActivity