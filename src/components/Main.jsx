import Link from 'next/link';
import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaFacebook, FaGithub, FaLinkedinIn, FaTelegram} from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>WELCOME TO MY PORTFOLIO</p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'>SEYHA</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Full Stack Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I work with the Back End or server side of the application as well as the Front End, or client side.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a href='/' target='_blank' rel='noreferrer'>
              <div
                className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <FaLinkedinIn/>
              </div>
            </a>
            <Link href='/'>
              <div
                className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <FaTelegram/>
              </div>
            </Link>
            <Link href='/'>
              <div
                className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <FaFacebook/>
              </div>
            </Link>
            <a href='/' target='_blank' rel='noreferrer'>
              <div
                className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <FaGithub/>
              </div>
            </a>
            <Link href='/'>
              <div
                className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                <AiOutlineMail/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;