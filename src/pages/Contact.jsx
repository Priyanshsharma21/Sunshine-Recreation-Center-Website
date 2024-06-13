import React, { useRef, useState } from 'react';
import { GradualSpacing } from '../components';
import { ScrollToPlugin } from 'gsap/all';
import gsap from 'gsap';
import { BsArrowDown } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { preMessage, phoneNumber } from '../constant';
import emailjs from '@emailjs/browser';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

gsap.registerPlugin(ScrollToPlugin);


const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    place: '',
    school: '',
    contact : '',
    wantOnlineService: 'No',
    onlineServiceOption: '',
    wantOfflineService: 'No'
  });


  const handleChatWithUs = () => {
    const encodedMessage = encodeURIComponent(preMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnlineServiceChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, wantOnlineService: value });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      age: '',
      place: '',
      school: '',
      contact: '',
      wantOnlineService: 'No',
      onlineServiceOption: '',
      wantOfflineService: 'No'
    });
  };

  const handleSubmit = (e) => {
    console.log(form.current)
    e.preventDefault();
    emailjs
      .sendForm('service_oig59jb', 'template_zaewpsh', form.current, {
        publicKey: 'LbbIL_gQxHYevjzCJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Details Submitted.', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
            });
          resetForm();
        },
        (error) => {
          console.log('FAILED...', error);
          toast.error('oops! something went wrong.', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
            });
        },
      );
  };

  const handleSection = (section)=>{
    gsap.to(window, { duration: 1, scrollTo: `#${section}` });
  }

  return (
    <div className='contact'>
      <div id="contact_section1" className="contact_main">
      <div className="testimonials_heading w-full flex justify-center">
            <GradualSpacing
              className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
              text="CONTACT US"
            />
          </div>
        <div className="contact_form w-full flex justify-center items-center">
          <form ref={form} onSubmit={handleSubmit} className='form_main'>
            <div className="form_row_1 flex">
              <input type="text" name="name" onChange={handleChange} placeholder='Enter Your Name' required className='input_main'/>
              <input type="number" name="age" onChange={handleChange} placeholder='Enter Your Age' required className='input_main'/>
            </div>
            <div className="form_row_2 flex">
              <input type="text" name="school" onChange={handleChange} placeholder='Enter Your School' required className='input_main'/>
              <input type="text" name="place" onChange={handleChange} placeholder='Enter Your Place' required className='input_main'/>
            </div>
            <div className="form_row_2 flex">
              <input type="text" name="contact" onChange={handleChange} placeholder='Enter Your Contact Number' required className='input_main'/>
            </div>
            <div className="form_row_3 flex">
                <select className='input_main' name="wantOnlineService" onChange={handleOnlineServiceChange}>
                  <option className="cursor-not-allowed so" default value="">Do you want Online Service ?</option>
                  <option className="cursor-pointer so" value="Yes">Yes</option>
                  <option className="cursor-pointer so" value="No">No</option>
                </select>
              {formData.wantOnlineService === 'Yes' && (
                <select className='input_main' name="onlineServiceOption" onChange={handleChange} required>
                  <option className="cursor-not-allowed so" value="">Select Online Service</option>
                  <option className="cursor-pointer so" value="Book Reading Sessions">Book Reading Sessions</option>
                  <option className="cursor-pointer so" value="Human Library Sessions">Human Library Sessions</option>
                  <option className="cursor-pointer so" value="Happiness and Life Skill Talks">Happiness and Life Skill Talks</option>
                </select>
              )}
            </div>
            <div className="form_row_4">
                <select className='input_main' name="wantOfflineService" onChange={handleChange} required>
                <option className="cursor-not-allowed so" default value="">Do you want Offline Service ?</option>
                  <option className="cursor-pointer so" value="Yes">Yes</option>
                  <option className="cursor-pointer so" value="No">No</option>
                </select>
            </div>
            <button value="submit" className='input_main submit_btn bg-[#1212123f] cursor-pointer hover:bg-[#1414144e]' type="submit">Submit</button>
          </form>
        </div>
        
      </div>
      
      <div id="contact_section2" className="contact_schedule">
          <div className="testimonials_heading w-full flex justify-center">
            <GradualSpacing
              className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
              text="SCHEDULE"
            />
          </div>  

          <div className="contact_Schedule_table w-full flex justify-center items-center">
              <table className="timetable">
                <thead className='table_head gmb'>
                  <tr>
                    <th className='gmb'>Service Type</th>
                    <th className='gmb'>Days</th>
                    <th className='gmb'>Time</th>
                    <th className='gmb'>Frequency</th>
                  </tr>
                </thead>
                <tbody className='table_body gmb'>
                  <tr className='gmb'>
                    <td className="gmbr">Online Service</td>
                    <td className="gmbr">All days</td>
                    <td className="gmbr">6:00 PM - 7:00 PM</td>
                    <td className="gmbr">Daily</td>
                  </tr>
                  <tr className='gmb'>
                    <td className="gmbr">Offline Service</td>
                    <td className="gmbr">2nd Saturday</td>
                    <td className="gmbr">10:00 AM - 11:00 AM</td>
                    <td className="gmbr">Monthly (2nd Saturday)</td>
                  </tr>
                  <tr className='gmb'>
                    <td className="gmbr">Offline Service</td>
                    <td className="gmbr">4th Saturday</td>
                    <td className="gmbr">10:00 AM - 11:00 AM</td>
                    <td className="gmbr">Monthly (4th Saturday)</td>
                  </tr>
                  <tr className='gmb'>
                    <td className="gmbr">Offline Service</td>
                    <td className="gmbr">All Sundays</td>
                    <td className="gmbr">10:00 AM - 11:00 AM</td>
                    <td className="gmbr">Weekly (Every Sunday)</td>
                  </tr>
                  <tr className='gmb'>
                    <td className="gmbr">Smart Kid Evaluation</td>
                    <td className="gmbr text-center" colSpan="3">Monthly</td>
                  </tr>
                  <tr className='gmb'>
                    <td className="gmbr text-center bg-[#1212123f] cursor-pointer hover:bg-[#1414144e]" colSpan="4">
                      <div onClick={handleChatWithUs} className="flex items-center w-full justify-center">
                        <FaWhatsapp className='text-white'/>
                        <div className="chatwithus ml-4">
                          Chat with us
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
            </table>
          </div>

      </div>

      <div id="contact_section4" className="contact_map">
        <section className="mt-16">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.1821116642873!2d80.67316283491253!3d16.51690129153459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e4d58eddf989%3A0xc59ca086dfcafab8!2scurrency%20nagar%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1717675753346!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;



// ONLINE SERVICE 
//    All days 6pm to 7pm 
// OFFLINE SERVICE 
// 2ndSaturday 10AM to 11AM 
// 4th Saturday 10AM to 11AM 
// All Sundays   10AM to 11AM
// Smart Kid Evaluation(montly)

// Online registrations 8978663599
// sunshinerecreation1@gmail.com
//  Community hall Sachivalayam,Currency nagar behind Aayush hospital Ramachandranagar Vijayawada 520008