import React, {useEffect, useState} from "react";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaFacebook, FaGithub, FaLinkedinIn, FaTelegram} from "react-icons/fa";
import {useRouter} from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();
  const {pathname} = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/restaurant' ||
      router.asPath === '/file'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);


  const handleNav = () => {
    setNav(!nav);
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div style={{backgroundColor: `${navBg}`}}
         className={shadow ? 'fixed w-full h-16 shadow-xl z-[100] ease-in-out duration-300'
           : 'fixed w-full h-16 z-[100]'
         }>
      <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16 z-50'>
        <Link href='/'>
          <h2 className='text-blue-900 text-2xl'>SEYHA</h2>
          {/*<Image src='/../public/assets/navLogo.png' alt='navbarlogo' width='125' height='50'/>*/}
        </Link>
        <div>
          <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
            <Link href='/'>
              <li
                className={`ml-10 text-sm uppercase font-bold hover:text-blue-900 ${pathname === '/d' ? 'text-blue-900' : ''} `}>Home
              </li>
            </Link>
            <Link href='/#about'>
              <li
                className={`ml-10 text-sm uppercase font-bold hover:text-blue-900 ${pathname === '/#about' ? 'text-blue-900' : ''} `}>About
              </li>
            </Link>
            <Link href='/#skills'>
              <li
                className={`ml-10 text-sm uppercase font-bold hover:text-blue-900 ${pathname === '/#skills' ? 'text-blue-900' : ''} `}>Skills
              </li>
            </Link>
            <Link href='/#projects'>
              <li
                className={`ml-10 text-sm uppercase font-bold hover:text-blue-900 ${pathname === '/#projects' ? 'text-blue-900' : ''} `}>Project
              </li>
            </Link>
            <Link href='/#contact'>
              <li
                className={`ml-10 text-sm uppercase font-bold hover:text-blue-900 ${pathname === '/#contact' ? 'text-blue-900' : ''} `}>Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-6 sm:p-7 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href='/'>
                {/*<Image src='/../public/assets/navLogo.png' alt='/' width='87' height='35'/>*/}
                <h2 className='text-blue-900'>SEYHA</h2>
              </Link>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>WELCOME TO MY PORTFOLIO</p>
            </div>
          </div>
          <div className='py-4 flex flex-col justify-between'>
            <ul className='uppercase float-left'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Project</li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='mt-10'>

              <div className='border-t border-gray-300'>
                <p className='uppercase tracking-widest text-[#5651e5] py-4'>Let&apos;s Connect</p>
              </div>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>

                <a href="https://www.linkedin.com/in/seyha-vorn/" target='_blank'
                   rel='noreferrer'>
                  <div
                    className='rounded-full shadow-lg shadow-gray-400 p-4 sm:p-2 cursor-pointer hover:scale-105 ease-in duration-200'>
                    <FaLinkedinIn/>
                  </div>
                </a>

                <a href="https://t.me/SeyhaVorn" target='_blank'
                   rel='noreferrer'>
                  <div
                    className='rounded-full shadow-lg shadow-gray-400 p-4 sm:p-2 cursor-pointer hover:scale-105 ease-in duration-200'>
                    <FaTelegram/>
                  </div>
                </a>

                <a href="https://facebook.com/seyha.vornn/" target='_blank'
                   rel='noreferrer'>
                  <div
                    className='rounded-full shadow-lg shadow-gray-400 p-4 sm:p-2 cursor-pointer hover:scale-105 ease-in duration-200'>
                    <FaFacebook/>
                  </div>
                </a>

                <a href="https://github.com/SeyhaVORN" target='_blank'
                   rel='noreferrer'>
                  <div
                    className='rounded-full shadow-lg shadow-gray-400 p-4 sm:p-2 cursor-pointer hover:scale-105 ease-in duration-200'>
                    <FaGithub/>
                  </div>
                </a>

                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target='_blank'
                   rel='noreferrer'>
                  <div
                    className='rounded-full shadow-lg shadow-gray-400 p-4 sm:p-2 cursor-pointer hover:scale-105 ease-in duration-200'>
                    <AiOutlineMail/>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;