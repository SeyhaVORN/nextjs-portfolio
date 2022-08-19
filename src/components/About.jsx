import React from "react";
import Image from 'next/image';
import AboutImg from '../../public/assets/seyha.png';
import Link from "next/link";

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-6 flex items-center py-32'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4 italic font-mono'>SEYHA VORN</h2>
          <p className='py-2 text-gray-600'>
            I&apos;m not your normal developer
          </p>
          <p className='py-2 text-gray-600'>
            I have been attending the Royal University of Phnom Penh (RUPP) since 2019. I am a third-year student in
            Computer Science, I have known many subjects such as HTML, CSS, Bootstrap, Materialize CSS, SASS,
            JavaScript, jQuery, React JS, OOP, MySQL, C, C++, C#, Java, and Design skill has Photoshop, Abode XD,
            Premiere Pro. Besides IT subjects I have studied some subjects such as Microsoft Office such as Word, Excel,
            and PowerPoint. My Professional Life has communication skills, working with teammates, an open mind,
            flexibility.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my last project</p>
          </Link>
        </div>
        <div className='flex justify-center items-center'>
          <div className='sm:max-w-[80%] w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image src={AboutImg} className='rounded-xl' alt='/' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;