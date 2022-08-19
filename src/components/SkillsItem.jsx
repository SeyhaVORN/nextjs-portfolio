import Image from "next/image";
import React from "react";

const SkillsItem = ({title, imageSkills, skillsPercent}) => {
  return (
    <div className='px-3 py-2 shadow rounded-full hover:scale-105 ease-in duration-300'>
      <div className='flex justify-between items-center grid grid-cols-6'>
        <div className='flex justify-center items-start grid sm:px-4'>
          <Image src={imageSkills} alt='/' width='56px' height='56px' className='sm:w-[46px] sm:h-[46px]'/>
        </div>
        <div className='grid col-span-5 w-full h-full'>
          <div className='flex items-center justify-center'>
            <div className='bg-[#ecf0f3] w-full h-[20px] shadow mr-4 ml-4'>
              <div className="bg-blue-900 h-full text-base text-white flex justify-center items-center"
                   style={{width: `${skillsPercent}`}}>{title}</div>
            </div>
            <span className='text-blue-900 font-bold'>{skillsPercent}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SkillsItem;