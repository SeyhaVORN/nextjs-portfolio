import Link from 'next/link';
import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaFacebook, FaGithub, FaLinkedinIn, FaTelegram} from 'react-icons/fa';
import {motion, Variant} from "framer-motion";

const Main = () => {
  const textAnimate = {
    offscreen: {x: -40, opacity: 0},
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: .5,
      }
    }
  };
  const textName = {
    offscreen: {x: 40, opacity: 0},
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: .7,
      }
    }
  };
  const textHi = {
    offscreen: {x: -40, opacity: 0},
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        duration: .5,
      }
    }
  };
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <motion.div
            initial={'offscreen'}
            animate={'onscreen'}
            variants={textAnimate}
          >
            <p className='uppercase text-sm tracking-widest text-gray-600'>WELCOME TO MY PORTFOLIO</p>
          </motion.div>

          <h1 className='py-4 text-gray-700'>

            <div className='flex justify-center items-center'>
              <motion.div
                initial={'offscreen'}
                animate={'onscreen'}
                variants={textHi}
                className='px-4'>Hi, I&#39;m
              </motion.div>
              <motion.div className='text-[#5651e5] font-style'
                          initial={'offscreen'}
                          animate={'onscreen'}
                          variants={textName}
              >SEYHA VORN
              </motion.div>
            </div>

          </h1>
          <h1 className='py-2 text-gray-700'>A Full Stack Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I work with the Back End or server side of the application as well as the Front End, or client side.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a href="https://www.linkedin.com/in/seyha-vorn/" target='_blank'
               rel='noreferrer'>
              <div
                className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <FaLinkedinIn/>
              </div>
            </a>
            <a href="https://t.me/SeyhaVorn" target='_blank'
               rel='noreferrer'>
              <div
                className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <FaTelegram/>
              </div>
            </a>
            <a href="https://facebook.com/seyha.vornn/" target='_blank'
               rel='noreferrer'>
              <div
                className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <FaFacebook/>
              </div>
            </a>
            <a href="https://github.com/SeyhaVORN" target='_blank'
               rel='noreferrer'>
              <div
                className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <FaGithub/>
              </div>
            </a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target='_blank'
               rel='noreferrer'>
              <div
                className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineMail/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;