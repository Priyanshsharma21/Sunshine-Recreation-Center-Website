import React from 'react';
import { logo } from '../assets';
import { footer_social_media } from '../constant';


const Footer = () => {
  return (
    <div className='relative h-[400px] footer text-white' style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className='relative h-[calc(100vh+400px)] -top-[100vh]'>
        <div className='h-[400px] sticky top-[calc(100vh-400px)]'>
          <main className="absolute top-0 w-full h-full footer_main">

            <section className="section1_footer flex items-center justify-center text-center text-2xl">
              <div className="email">
                <a href="mailto:sunshinerecreation1@gmail.com" className="text-white font-semibold email_footer">sunshinerecreation1@gmail.com</a>
              </div>
            </section>

            <section className="section2_footer flex items-center px-8 ">

                <div className="s21_footer h-full flex justify-center md:justify-start">
                  <img src={logo} className='logo_of_sunshine_footer' alt="Sunshine Recreation Center Logo" />
                </div>

                <div className="s22_footer h-full flex justify-center items-center">
                  <ul className="flex space-x-4">
                    {footer_social_media.map((item) => (
                      <li key={item.name} title={item.name}>
                        <a href={item.url} target="_blank" className="text-blue-400">
                          <item.icon className='text-white footer_logo'/>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="s23_footer h-full flex justify-center items-center text-center md:text-right">
                  <div className="address">
                    Sachivalayam, Currency Nagar, behind Aayush Hospital, Ramachandranagar, Vijayawada 520008
                  </div>
                </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Footer;
