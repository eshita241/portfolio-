import React, { useRef, useState } from 'react';
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { FaMedium } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:eshitachokhani@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className='h-full bg-black py-24'>
      <div className='container mx-auto text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <h2 className='h2 xsm:text-4xl text-center text-white sm:text-5xl font-bold mb-12 z-[-10px] font-sans'>
            Say Hello!
          </h2>
          <form className='flex-1 flex flex-col gap-6 w-full mx-auto' ref={form} onSubmit={handleSubmit}>
              <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Name' className='input xsm:w-[20rem] h-[3rem] sm:w-[43.5rem] rounded-md px-3 border-2 border-green text-white bg-grey ' />
            <input type='text' name='subject' value={formData.subject} onChange={handleChange} placeholder='Subject' className='input xsm:w-[20rem] h-[3.7rem] sm:w-[43.5rem] rounded-md px-3 border-2 border-green text-white bg-grey' />
            <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Message' className='textarea xsm:w-[20rem] h-[7.7rem] sm:w-[43.5rem] rounded-md px-3 pt-11 text-lg border-2 border-green text-white bg-grey '></textarea>
            <button type="submit" className='mx-auto text-center sm:h-[3.7rem] border-2 sm:w-44 bg-opacity-5  border-green hover:bg-opacity-20 transition bg-green text-white rounded-full sm:px-10 sm:py-4 font-semibold sm:text-[1rem] xsm:px-5 xsm:text-[12.9px] xsm:py-2'>
              Get in Touch
            </button>
          </form>
          <div className="flex justify-center py-7 gap-10  text-white xl:hidden">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <span className="w-10 h-10 text-xl bg-grey  rounded-full inline-flex items-center justify-center hover:bg-dark_green hover:bg-opacity-25 hover:text-green cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <TbBrandGithub />
              </span>
            </a>
            <a href="https://linkedin.com/in/eshita-chokhani-16098b24a" target="_blank" rel="noreferrer">
              <span className="w-10 h-10 text-xl bg-grey hover:bg-dark_green hover:bg-opacity-25 rounded-full inline-flex items-center justify-center hover:text-green cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <FiLinkedin />
              </span>
            </a>
            <a href="https://medium.com/@eshitachokhani" target="_blank" rel="noreferrer">
              <span className="w-10 h-10 text-xl bg-grey  rounded-full inline-flex items-center justify-center hover:bg-dark_green hover:bg-opacity-25 hover:text-green cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <FaMedium />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
